from sqlalchemy import Column, Integer, String, Float, DateTime, Boolean, ForeignKey, JSON
from sqlalchemy.orm import declarative_base, relationship
from sqlalchemy.sql import func

Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True, index=True) # Firebase UID
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    avatar = Column(String, nullable=True)
    timezone = Column(String, default="UTC")
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    goals = relationship("Goal", back_populates="user", cascade="all, delete-orphan")
    momentum_records = relationship("MomentumRecord", back_populates="user", cascade="all, delete-orphan")
    notifications = relationship("Notification", back_populates="user", cascade="all, delete-orphan")
    calendar_events = relationship("CalendarEvent", back_populates="user", cascade="all, delete-orphan")

class Goal(Base):
    __tablename__ = "goals"

    id = Column(String, primary_key=True, index=True)
    user_id = Column(String, ForeignKey("users.id"), nullable=False)
    title = Column(String, nullable=False)
    description = Column(String, nullable=True)
    target_date = Column(DateTime(timezone=True), nullable=True)
    progress = Column(Float, default=0.0)
    status = Column(String, default="active") # active, completed, paused

    user = relationship("User", back_populates="goals")
    tasks = relationship("Task", back_populates="goal", cascade="all, delete-orphan")
    future_simulations = relationship("FutureSimulation", back_populates="goal", cascade="all, delete-orphan")

class Task(Base):
    __tablename__ = "tasks"

    id = Column(String, primary_key=True, index=True)
    goal_id = Column(String, ForeignKey("goals.id"), nullable=False)
    title = Column(String, nullable=False)
    description = Column(String, nullable=True)
    priority = Column(String, default="medium") # low, medium, high, critical
    due_date = Column(DateTime(timezone=True), nullable=True)
    estimated_hours = Column(Float, default=1.0)
    completed = Column(Boolean, default=False)

    goal = relationship("Goal", back_populates="tasks")

class MomentumRecord(Base):
    __tablename__ = "momentum_records"

    id = Column(String, primary_key=True, index=True)
    user_id = Column(String, ForeignKey("users.id"), nullable=False)
    score = Column(Float, default=0.0)
    consistency = Column(Float, default=0.0)
    velocity = Column(Float, default=0.0)
    completion_rate = Column(Float, default=0.0)
    date = Column(DateTime(timezone=True), server_default=func.now())

    user = relationship("User", back_populates="momentum_records")

class FutureSimulation(Base):
    __tablename__ = "future_simulations"

    id = Column(String, primary_key=True, index=True)
    goal_id = Column(String, ForeignKey("goals.id"), nullable=False)
    current_projection = Column(Integer) # Days
    optimized_projection = Column(Integer) # Days
    recommendation = Column(String)

    goal = relationship("Goal", back_populates="future_simulations")

class Notification(Base):
    __tablename__ = "notifications"

    id = Column(String, primary_key=True, index=True)
    user_id = Column(String, ForeignKey("users.id"), nullable=False)
    title = Column(String, nullable=False)
    message = Column(String, nullable=False)
    type = Column(String, default="info") # info, warning, success
    read = Column(Boolean, default=False)

    user = relationship("User", back_populates="notifications")

class AgentLog(Base):
    __tablename__ = "agent_logs"

    id = Column(String, primary_key=True, index=True)
    agent = Column(String, nullable=False) # Atlas, Orbit, Sentinel, etc.
    action = Column(String, nullable=False)
    timestamp = Column(DateTime(timezone=True), server_default=func.now())

class CalendarEvent(Base):
    __tablename__ = "calendar_events"

    id = Column(String, primary_key=True, index=True)
    user_id = Column(String, ForeignKey("users.id"), nullable=False)
    title = Column(String, nullable=False)
    start_time = Column(DateTime(timezone=True), nullable=False)
    end_time = Column(DateTime(timezone=True), nullable=False)

    user = relationship("User", back_populates="calendar_events")
