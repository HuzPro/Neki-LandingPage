from sqlalchemy import Column, Integer, String, true
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)

class Shoe(Base):
    __tablename__ = "shoes"

    id = Column(Integer, primary_key=True)
    imgUrl = Column(String)
    name = Column(String, index=True)
    description = Column(String)
    price = Column(Integer)
    rating = Column(String)
