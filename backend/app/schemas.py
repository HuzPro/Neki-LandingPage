from pydantic import BaseModel, EmailStr
from typing import Optional

class UserBase(BaseModel):
    email: EmailStr

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

class ShoeBase(BaseModel):
    imgUrl: str
    name: str
    description: str
    price: int
    rating: str

class ShoeCreate(ShoeBase):
    pass

class Shoe(ShoeBase):
    id: int

    class Config:
        orm_mode = True

