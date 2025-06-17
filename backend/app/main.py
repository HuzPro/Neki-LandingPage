from fastapi import Depends, FastAPI, HTTPException, status, Path
from fastapi import File, UploadFile, Form
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from datetime import timedelta
import uuid
import os

from . import crud, models, schemas, security, database

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

# CORS configuration
origins = [
    "http://localhost:5173", # Your React app's origin
    "http://127.0.0.1:5173",
    # Add other origins if needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/token", response_model=schemas.Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(database.get_db)):
    user = crud.get_user_by_email(db, email=form_data.username) # form_data.username is used for email
    if not user or not security.verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=security.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = security.create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.post("/users/signup", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(database.get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)

@app.get("/users/me/", response_model=schemas.User)
async def read_users_me(current_user: models.User = Depends(security.get_current_active_user)):
    return current_user


@app.get("/shoes/", response_model=list[schemas.Shoe])
def get_shoes(db: Session = Depends(database.get_db)):
    return crud.get_all_shoes(db)


UPLOAD_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../uploads/static"))

@app.post("/shoes/", response_model=schemas.Shoe)
def add_shoe(
    name: str = Form(...),
    description: str = Form(...),
    price: int = Form(...),
    rating: str = Form(...),
    image: UploadFile = File(...),
    db: Session = Depends(database.get_db),
    current_user: models.User = Depends(security.get_current_active_user),
):
    if current_user.email is not "admin@neki.htb":
        raise HTTPException(status_code=403, detail="Only admin can add shoes")

    # Ensure upload directory exists
    os.makedirs(UPLOAD_DIR, exist_ok=True)

    # Generate a unique filename
    ext = os.path.splitext(image.filename)[1]
    if ext not in ["png", "jpg", "jpeg"]:
        raise HTTPException(status_code=403, detail="Invalid filetype")
    image_id = f"{uuid.uuid4()}{ext}"
    image_path = os.path.join(UPLOAD_DIR, image_id)

    # Save the image to disk
    with open(image_path, "wb") as f:
        f.write(image.file.read())

    # Construct the image URL or relative path
    img_url = f"/static/{image_id}"  # adjust depending on how you serve static files

    # Create shoe record
    shoe_data = schemas.ShoeCreate(
        name=name,
        description=description,
        price=price,
        rating=rating,
        imgUrl=img_url,
    )
    return crud.create_shoe(db, shoe_data)


@app.delete("/shoes/{shoe_id}", response_model=schemas.Shoe)
def remove_shoe(
    shoe_id: int = Path(..., gt=0),
    db: Session = Depends(database.get_db),
    current_user: models.User = Depends(security.get_current_active_user),
):
    if current_user.email is not "admin@neki.htb":
        raise HTTPException(status_code=403, detail="Only admin can remove shoes")
    deleted = crud.delete_shoe(db, shoe_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Shoe not found")
    return deleted

# To run the backend:
# Option 1: Navigate to the 'backend' directory first
#   cd Neki-LandingPage/backend
#   uvicorn app.main:app --reload
#
# Option 2: Run from the project root directory ('Neki-LandingPage')
#   uvicorn backend.app.main:app --reload
#
# The error "ModuleNotFoundError: No module named 'app'" occurs if you are in the
# 'Neki-LandingPage' directory and run 'uvicorn app.main:app --reload' directly.
# This is because Python looks for an 'app' module in the current directory,
# but it's located in 'Neki-LandingPage/backend/app'.
# Use one of the commands above based on your current directory.
