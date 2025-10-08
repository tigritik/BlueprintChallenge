from fastapi import FastAPI, Request, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from src.crypto import encrypt_payload, decrypt_payload
from src.logs import fetch_logs, add_log

from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

origins = [os.getenv("FRONTEND_ORIGIN")]

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
async def encrypt(request: Request, body: RequestBody):
    data = encrypt_payload(body.key, body.payload)
    ip = request.client.host
    add_log(ip, data)
    return {"data": data}

@app.post("/api/v1/decrypt")
async def decrypt(request: Request, body: RequestBody):
    data = decrypt_payload(body.key, body.payload)
    ip = request.client.host
    add_log(ip, data)
    return {"data": data}

@app.get("/api/v1/logs")
async def get_logs(size: int, offset: int):
    if size < 0 or offset < 0:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST)

    return fetch_logs(size, offset)
