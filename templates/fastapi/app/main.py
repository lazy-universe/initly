# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import health_route, home_route

app = FastAPI(
    title="FastAPI Template",
    description="A template for FastAPI projects",
    version="1.0.0",
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # you can restrict origins by specifying one
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register route groups
app.include_router(home_route.router)
app.include_router(health_route.router)
