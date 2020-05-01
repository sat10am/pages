from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session
from starlette.responses import JSONResponse
from fastapi.openapi.docs import get_swagger_ui_html
from fastapi.openapi.utils import get_openapi

from api.sql import crud, models, schemas
from api.sql.database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


# Dependency
def get_database():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()  # pylint: disable=no-member


@app.post("/api/pages")
async def pages(db: Session = Depends(get_database)):
    return await crud.get_articles(db)


@app.get("/api/page", response_model=schemas.Article)
async def page(db: Session = Depends(get_database)):
    return crud.get_article(db)


@app.get("/api/openapi.json")
def get_open_api_endpoint():
    return JSONResponse(
        get_openapi(title="FastAPI", routes=app.routes, version="2")
    )


@app.get("/api/docs")
def get_documentation():
    return get_swagger_ui_html(openapi_url="/api/openapi.json", title="docs")
