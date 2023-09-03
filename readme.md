# How to run this application

There are multiple ways to run this applications, etiher through Docker or thorugh your terminal.

**To use this repository you need to have [Node](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed**

## Getting Started

First, we need to clone the project, and install Uvicorn and FastAPI to run the API.

```bash
git clone https://github.com/H584958/StaccElectricity.git

cd ./API

pip install fastapi uvicorn

uvicorn main:app --host 0.0.0.0 --port 3306 --reload
```

Then you can open [http://localhost:3306](http://localhost:3306) with your browser to see the result.

To run the application, from the root directory, tou need to run the following commands:

```bash
cd ./stacc-challenge-public

npm install

npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker

The way I have set up docker depends on the repo being available externally. It is not an optimal way to use docker as a container should be "self containing". A container should be able to be cloned and run on all PCs, but it does not work as the files it depends on are "mounted" to the container when it is run.

### How to run with Docker

First you need to have installed Docker on your computer. You can download it [here](https://www.docker.com/products/docker-desktop)

All you need to do is to run the following command from the root directory:

```bash
docker-compose up -d
```

Then you can open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How I compared electricity providers

### Calculation of annual consumption

I used the 500 hours of data that was provided, and saw that this data was from winter months, and therefore calculated the average daily usage. To calculate the annual consumption I set up the amount of days in each season, and a rate for how much power you would use for each season.

```js
const seasonConsumptionRates = {
  winter: 1.0,
  spring: 0.8,
  summer: 0.6,
  fall: 0.8,
};
```

To get the annual consumption, I multiplied the winter consumption with the amount of days in each season and with the corresonding seasonConsumptionRates.

### Calculation of previous month consumption

To calculate this I find out which season the previos month is in, then I devide the annual consumption by 12 and multiply by the seasonConsumptionRates.

### Calculation of the price

To calculate the monthly price for each provider I used the previous month consumption and multiplied it with the price per kWh and added VAT.
