from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from contextlib import asynccontextmanager

from database import engine, Base, get_db
import crud
import schemas
from routers import goals, tasks, users

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Create tables
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    # Shutdown
    await engine.dispose()

app = FastAPI(
    title="Chronix API",
    description="Backend for the Chronix Productivity Orchestration Platform",
    version="1.0.0",
    lifespan=lifespan
)

app.include_router(users.router, prefix="/api/users", tags=["users"])
app.include_router(goals.router, prefix="/api/goals", tags=["goals"])
app.include_router(tasks.router, prefix="/api/tasks", tags=["tasks"])

@app.get("/")
async def root():
    return {"message": "Welcome to the Chronix API"}
