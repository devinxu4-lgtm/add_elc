# 通用 PC/移动端应用程序骨架

这是一个带有 Python 后端的现代、响应式 Web 应用程序骨架。

## 技术栈
- **后端**: Python (FastAPI) + SQLAlchemy (数据库)
- **前端**: React (Vite) + Tailwind CSS

## 先决条件
- Python 3.8+
- Node.js & npm

## 如何运行

### 1. 后端 (Backend)
打开一个终端:
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
API 服务将在 `http://127.0.0.1:8000` 运行。

### 2. 前端 (Frontend)
打开另一个终端:
```bash
cd frontend
npm install
npm run dev
```
应用程序将在 `http://localhost:5173` 运行。

## 功能特性
- **响应式布局**:在此桌面端显示侧边栏导航，移动端显示汉堡菜单。
- **后端集成**: 前端通过 API 获取 Python 后端的数据。
- **数据库支持**: 集成 SQLAlchemy，支持 SQLite/MySQL/PostgreSQL。默认配置为 SQLite。
- **Tailwind CSS**: 预配置样式库，便于快速 UI 开发。
