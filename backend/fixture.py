from user_model import User
from database import create_db_and_tables, engine
from sqlmodel import Session

WHOAMI = {
        "name": "Emmanuel Guefif",
        "title": "Mid-level developer",
        "catch_phrase": "Former Elementary School",
        "biopic": """
I used to program as a hobby while teaching as a profession. I don't teach anymore, but I still program, and I get paid for it. I am a lifelong learner and a curious man, programming is a great activity. I can learn about technology and my client's domain. I studied sociology, and I've learned about asking questions and trying to understand people. As a developer, I combined my technical and sociological skills to understand the problem at hand and find solutions. 

I like web development because it's the best way to solve people's problems. I also have a passion for low-level programming. When I finish a project, book, or article about it, it's like I've added a new piece to the big puzzle of computer systems. I love it!
    """,
    "password": "12345",
}


if __name__ == "__main__":
    create_db_and_tables()
    with Session(engine) as session:
        user = User(**WHOAMI)
        session.add(user)
        session.commit()
