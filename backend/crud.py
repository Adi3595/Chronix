from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
import uuid
import models
import schemas

async def get_user(db: AsyncSession, user_id: str):
    result = await db.execute(select(models.User).filter(models.User.id == user_id))
    return result.scalars().first()

async def create_user(db: AsyncSession, user: schemas.UserCreate):
    db_user = models.User(**user.model_dump())
    db.add(db_user)
    await db.commit()
    await db.refresh(db_user)
    return db_user

async def get_goals(db: AsyncSession, user_id: str, skip: int = 0, limit: int = 100):
    result = await db.execute(select(models.Goal).filter(models.Goal.user_id == user_id).offset(skip).limit(limit))
    return result.scalars().all()

async def create_goal(db: AsyncSession, goal: schemas.GoalCreate, user_id: str):
    db_goal = models.Goal(
        id=str(uuid.uuid4()),
        user_id=user_id,
        **goal.model_dump()
    )
    db.add(db_goal)
    await db.commit()
    await db.refresh(db_goal)
    return db_goal

async def get_tasks(db: AsyncSession, goal_id: str, skip: int = 0, limit: int = 100):
    result = await db.execute(select(models.Task).filter(models.Task.goal_id == goal_id).offset(skip).limit(limit))
    return result.scalars().all()

async def create_task(db: AsyncSession, task: schemas.TaskCreate):
    db_task = models.Task(
        id=str(uuid.uuid4()),
        **task.model_dump()
    )
    db.add(db_task)
    await db.commit()
    await db.refresh(db_task)
    return db_task
