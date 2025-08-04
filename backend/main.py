from typing import Annotated
from fastapi.middleware.cors import CORSMiddleware 
from fastapi import Depends, FastAPI, HTTPException, status

from user_model import User
from dependencies.database import SessionDep
from routers import login
from dependencies.authentication import get_current_active_user

origins = [
    "http://localhost:5173"
]

origins = [
    "http://localhost:5173"
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

@app.get("/pro")
async def update_professional(current_user: Annotated[User, Depends(get_current_active_user)]):
    return [{"item_id": "Foo", "owner": current_user.name}]

