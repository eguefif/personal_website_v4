from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

from user_model import User
from database import SessionDep

origins = [
    "http://localhost:5173"
]

origins = [
    "http://localhost:5173"
]

app = FastAPI()

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
