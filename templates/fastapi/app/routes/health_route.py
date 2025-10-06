# app/routes/health_route.py
from fastapi import APIRouter
from app.utils.logger import get_logger

router = APIRouter()
logger = get_logger(__name__)


@router.get("/health")
async def health_check():
    """
    Health check endpoint.
    Returns status ok if server is running.
    """
    logger.info("Health check endpoint called")
    return {"status": "ok"}
