from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/welcome")
async def welcome(name: str):
    return {"message": f"Hello {name.capitalize()}"}
