from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import requests
import json

app = FastAPI()

# Prevent CORS errors from frontend
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "hello test"}


@app.get("/electricityprice")
async def elPrice(year, month, day):
    url = 'https://www.hvakosterstrommen.no/api/v1/prices/{}/{}-{}_NO1.json'.format(
        year, month, day)
    response = requests.get(url)
    data = response.text
    return json.loads(data)
