from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, database

# Create tables if they don't exist
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

# Allow CORS so the frontend (running on a different port) can communicate with the backend
origins = [
    "http://localhost:5173",  # Vite default port
    "http://127.0.0.1:5173",
    "*", 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/hello")
def read_root():
    return {"message": "Hello from Python Backend!"}

# Sample DB Endpoint: Create Item
@app.post("/api/items/")
def create_item(title: str, description: str, db: Session = Depends(database.get_db)):
    db_item = models.Item(title=title, description=description)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

# Sample DB Endpoint: Get Items
@app.get("/api/items/")
def read_items(skip: int = 0, limit: int = 100, db: Session = Depends(database.get_db)):
    items = db.query(models.Item).offset(skip).limit(limit).all()
    return items
