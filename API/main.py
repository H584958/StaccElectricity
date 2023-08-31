from fastapi import FastAPI


import requests
import json

app = FastAPI()

allowed_origins=["*"]

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
