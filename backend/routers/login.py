from typing import Annotated
from datetime import datetime, timedelta, timezone
from fastapi import Depends, APIRouter, HTTPException, status

import os
from dotenv import load_dotenv

import jwt
from jwt.exceptions import InvalidTokenError
from passlib.context import CryptContext
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

from user_model import User
from dependencies.database import SessionDep

from pydantic import BaseModel

class Token(BaseModel):
    access_token: str
    token_type: str

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES"))

router = APIRouter()

async def verify_password(form_password, db_password):
    return pwd_context.verify(form_password, db_password)

async def get_user(username: str, session: SessionDep) -> User | None:
    user = session.query(User).filter(User.name == username).first()
    return user

async def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


async def authenticate_user(form_data: OAuth2PasswordRequestForm, user: User) -> bool:
    if not user:
        return False
    if not await verify_password(form_data.password, user.password):
        return False
    return True


@router.post("/token")
async def login_for_access_token(form_data: Annotated[OAuth2PasswordRequestForm, Depends()], session: SessionDep):
    user = await get_user(form_data.username, session)
    if not await authenticate_user(form_data, user):
        raise HTTPException(status_code=401, 
                            detail="Incorrect username or password",
                            headers={"WWW-Authenticate": "Bearer"},
                            )

    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = await create_access_token(
        data={"sub": user.name}, expires_delta=access_token_expires
    )
    return Token(access_token=access_token, token_type="bearer")
