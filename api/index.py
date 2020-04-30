from fastapi import FastAPI
from starlette.responses import JSONResponse
from fastapi.openapi.docs import get_swagger_ui_html
from fastapi.openapi.utils import get_openapi

app = FastAPI()


@app.get("/api")
async def root():
    return {"message": "Hello World"}


@app.get("/api/openapi.json")
async def get_open_api_endpoint():
    return JSONResponse(
        get_openapi(title="FastAPI", routes=app.routes, version="2")
    )


@app.get("/api/docs")
async def get_documentation():
    return get_swagger_ui_html(openapi_url="/api/openapi.json", title="docs")


@app.get("/api/welcome")
async def welcome(name: str):
    return {"message": f"Hello {name.capitalize()}"}
