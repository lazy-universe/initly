# app/routes/home_route.py
from fastapi import APIRouter
from app.utils.logger import get_logger

router = APIRouter()
logger = get_logger(__name__)


@router.get("/")
async def read_home():
    """
    Home route endpoint.
    Returns a welcoming message.
    """
    logger.info("Home Route accessed")
    return {"message": "Welcome to FastAPI Template"}
