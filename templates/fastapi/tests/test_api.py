# tests/test_api.py
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_health_endpoint():
    """Test the health check endpoint."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}

def test_home_endpoint():
    """Test the home endpoint."""
    response = client.get("/")
    assert response.status_code == 200
    assert "message" in response.json()
