from typing import Annotated
from fastapi.middleware.cors import CORSMiddleware 
from fastapi import Depends, FastAPI, HTTPException, status, Form

from pydantic import BaseModel

from user_model import User
from dependencies.database import SessionDep
from routers import login
from dependencies.authentication import get_current_active_user

origins = [
    "http://127.0.0.1:5173",
    "http://localhost:5173",
    "http://127.0.0.1:8000",
    "http://localhost:8000" 
]

app = FastAPI()

app.include_router(login.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/professional/")
async def professional(session: SessionDep) -> User:
    user = session.get(User, 1)
    return user

class UserForm(BaseModel):
        name: str
        title: str
        catch_phrase: str
        biopic: str


@app.post("/pro")
async def update_professional(
        data: Annotated[UserForm, Form()],
        current_user: Annotated[User, Depends(get_current_active_user)],
        session: SessionDep
        ):
    current_user.name = data.name
    current_user.title = data.title
    current_user.catch_phrase = data.catch_phrase
    current_user.catch_phrase = data.catch_phrase
    session.add(current_user)
    session.commit()
    return {"user": current_user.name}
