from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow CORS so the frontend (running on a different port) can communicate with the backend
origins = [
    "http://localhost:5173",  # Vite default port
    "http://127.0.0.1:5173",
    "*", # For development convenience, allow all origins. In production, be more specific.
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
