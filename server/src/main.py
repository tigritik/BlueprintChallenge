import os

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Request, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from src.crypto import decrypt_payload, encrypt_payload
from src.logs import add_log, fetch_logs, get_log_count

load_dotenv()

app = FastAPI()

origins = [os.getenv("FRONTEND_ORIGIN")]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class RequestBody(BaseModel):
    key: str
    payload: str


@app.post("/api/v1/encrypt")
async def encrypt(request: Request, body: RequestBody):
    try:
        data = encrypt_payload(body.key, body.payload)
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST) from e
    ip = request.client.host
    add_log(ip, data)
    return {"data": data}


@app.post("/api/v1/decrypt")
async def decrypt(request: Request, body: RequestBody):
    try:
        data = decrypt_payload(body.key, body.payload)
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST) from e
    ip = request.client.host
    add_log(ip, data)
    return {"data": data}


@app.get("/api/v1/logs")
async def get_logs(size: int, offset: int):
    if size < 0 or offset < 0:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST)

    return fetch_logs(size, offset)


@app.get("/api/v1/log-count")
async def count_logs():
    return {"count": get_log_count()}
