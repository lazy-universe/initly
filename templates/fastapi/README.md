# FastAPI Initly Template

A minimal, robust FastAPI project template for rapid development and easy scaling.  
Designed for use with [Initly](https://github.com/anup2702/initly) template hub.

---

## Features

- **FastAPI** with modern Python standards
- **Project structure** for scalability (routes, controllers, services, models, utils)
- **CORS** middleware enabled
- **Ready for FastAPI CLI** (`fastapi-cli`)
- **Testing** with `pytest`

---

## Project Structure

```
fastapi-initly/
│
├── app/
│   ├── main.py
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   │   ├── health_route.py
│   │   ├── home_route.py
│   ├── services/
│   └── utils/
│       └── logger.py
│
├── tests/
│   └── test_api.py
│
├── requirements.txt
├── .env.example
└── README.md
```

---

## Getting Started

### 1. Run this command

```sh
npx initly
# select fastapi-project
```

### 2. Create and activate a virtual environment

```sh
python -m venv .venv
# Windows
.venv\Scripts\activate
# macOS/Linux
source .venv/bin/activate
```

### 3. Install dependencies

```sh
pip install -r requirements.txt
```

### 4. Configure environment variables

Copy `.env.example` to `.env` and update values as needed.

```sh
cp .env.example .env
```

### 5. Run the development server

Using FastAPI CLI (recommended):

```sh
fastapi dev
# or fastapi run
```

Or with Uvicorn:

```sh
uvicorn app.main:app --reload
# or without --reload flag
```

---

## Testing

Run all tests with:

```sh
pytest
```

---

## Adding Routes

- Add new route files in `app/routes/`
- Register them in `app/main.py` using `app.include_router(...)`

---

## Logging

Use the logger utility in `app/utils/logger.py` for custom logging in your app.

---

## Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/foo`)
3. Commit your changes
4. Push to the branch (`git push origin feature/foo`)
5. Open a pull request

---

## Credits

- [Initly](https://github.com/anup2702/initly)
- [FastAPI](https://fastapi.tiangolo.com/)
