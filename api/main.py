from fastapi import FastAPI

app = FastAPI()


@app.get("/welcome")
async def root():
    return {"message": "Hello World"}
