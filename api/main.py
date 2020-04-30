from fastapi import FastAPI

app = FastAPI()


@app.get("/app/welcome")
async def root():
    return {"message": "Hello World"}
