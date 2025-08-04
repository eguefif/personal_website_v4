from sqlmodel import SQLModel, create_engine, Session
from typing import Generator, Annotated
import os
from dotenv import load_dotenv
from fastapi import Depends

load_dotenv()

DB_URL = os.getenv("DATABASE_URL")
DB_USER = os.getenv("POSTGRES_USER")
DB_PASSWORD = os.getenv("POSTGRES_PASSWORD")
DB = os.getenv("POSTGRES_DB")

connect_url = f"postgresql+psycopg://{DB_USER}:{DB_PASSWORD}@{DB_URL}/{DB}"

engine = create_engine(connect_url, echo=True)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session

SessionDep = Annotated[Session, Depends(get_session)]
