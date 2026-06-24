from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List

import crud
import schemas
from database import get_db

router = APIRouter()

@router.post("/", response_model=schemas.TaskResponse)
async def create_task(task: schemas.TaskCreate, db: AsyncSession = Depends(get_db)):
    return await crud.create_task(db=db, task=task)

@router.get("/{goal_id}", response_model=List[schemas.TaskResponse])
async def read_tasks(goal_id: str, skip: int = 0, limit: int = 100, db: AsyncSession = Depends(get_db)):
    tasks = await crud.get_tasks(db, goal_id=goal_id, skip=skip, limit=limit)
    return tasks
