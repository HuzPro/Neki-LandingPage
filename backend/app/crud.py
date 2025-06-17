from sqlalchemy.orm import Session
from . import models, schemas, security

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = security.get_password_hash(user.password)
    db_user = models.User(email=user.email, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_all_shoes(db: Session):
    return db.query(models.Shoe).all()

def get_shoe_by_id(db: Session, shoe_id: int):
    return db.query(models.Shoe).filter(models.Shoe.id == shoe_id).first()

def create_shoe(db: Session, shoe: schemas.ShoeCreate):
    db_shoe = models.Shoe(**shoe.model_dump())
    db.add(db_shoe)
    db.commit()
    db.refresh(db_shoe)
    return db_shoe

def delete_shoe(db: Session, shoe_id: int):
    shoe = db.query(models.Shoe).filter(models.Shoe.id == shoe_id).first()
    if shoe:
        db.delete(shoe)
        db.commit()
    return shoe

