frontend:
    cd frontend && pnpm dev

backend:
    cd backend && uv run fastapi dev main.py

db:
    docker compose up
