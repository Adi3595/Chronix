from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

class UserBase(BaseModel):
    name: str
    email: EmailStr
    avatar: Optional[str] = None
    timezone: str = "UTC"

class UserCreate(UserBase):
    id: str # Firebase UID

class UserResponse(UserBase):
    id: str
    created_at: datetime

    class Config:
        from_attributes = True

class GoalBase(BaseModel):
    title: str
    description: Optional[str] = None
    target_date: Optional[datetime] = None
    status: str = "active"

class GoalCreate(GoalBase):
    pass

class GoalResponse(GoalBase):
    id: str
    user_id: str
    progress: float

    class Config:
        from_attributes = True

class TaskBase(BaseModel):
    title: str
    description: Optional[str] = None
    priority: str = "medium"
    due_date: Optional[datetime] = None
    estimated_hours: float = 1.0

class TaskCreate(TaskBase):
    goal_id: str

class TaskResponse(TaskBase):
    id: str
    goal_id: str
    completed: bool

    class Config:
        from_attributes = True

class MomentumRecordResponse(BaseModel):
    id: str
    user_id: str
    score: float
    consistency: float
    velocity: float
    completion_rate: float
    date: datetime

    class Config:
        from_attributes = True
