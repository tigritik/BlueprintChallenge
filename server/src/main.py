import datetime

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class RequestBody(BaseModel):
    key: str
    payload: str


@app.post("/api/v1/encrypt")
async def encrypt(body: RequestBody):
    print(body)
    return {"data": body.key}

@app.post("/api/v1/decrypt")
async def decrypt(body: RequestBody):
    print(body)
    return {"data": body.key}

@app.get("/api/v1/logs")
async def get_logs():
    return [ {
        "id": "uuid",
        "timestamp": datetime.datetime.now().timestamp(),
        "ip": "127.0.0.1",
        "data": "payload"
    }]
