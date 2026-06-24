from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List

import crud
import schemas
from database import get_db

router = APIRouter()

@router.post("/{user_id}", response_model=schemas.GoalResponse)
async def create_goal(user_id: str, goal: schemas.GoalCreate, db: AsyncSession = Depends(get_db)):
    return await crud.create_goal(db=db, goal=goal, user_id=user_id)

@router.get("/{user_id}", response_model=List[schemas.GoalResponse])
async def read_goals(user_id: str, skip: int = 0, limit: int = 100, db: AsyncSession = Depends(get_db)):
    goals = await crud.get_goals(db, user_id=user_id, skip=skip, limit=limit)
    return goals
