# Universal PC/Mobile Application Skeleton

A modern, responsive web application skeleton with a python backend.

## Tech Stack
- **Backend**: Python (FastAPI)
- **Frontend**: React (Vite) + Tailwind CSS

## Prerequisites
- Python 3.8+
- Node.js & npm

## How to Run

### 1. Backend
Open a terminal:
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
The API will run at `http://127.0.0.1:8000`.

### 2. Frontend
Open another terminal:
```bash
cd frontend
npm install
npm run dev
```
The App will run at `http://localhost:5173`.

## Features
- **Responsive Layout**: Sidebar navigation on Desktop, Hamburger menu on Mobile.
- **Backend Integration**: Frontend fetches a greeting message from the Python backend.
- **Tailwind CSS**: Pre-configured for rapid UI development.
