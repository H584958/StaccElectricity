# How to run this application

There are multiple ways to run this applications, etiher through Docker or thorugh your terminal. I did not get the Docker API to run due to issues with CORS when fetching from the API. Therefore you dont need to have Docker to run this application.

##

**To use this repository you need to have [Node](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed**

First you need to clone this repository by writing the following command <code>git clone https://github.com/H584958/StaccElectricity.git</code> you then go into the folder by writing <code>cd /StaccElectricity/stacc-challenge-public</code> then you can install the packages required with <code>npm install</code>

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running the application though Docker

First you need to have installed Docker on your computer. You can download it [here](https://www.docker.com/products/docker-desktop)

All you need to do is to check that you are in the correct folder (StaccChallenge) and run:

```bash
docker-compose up -d
```

Then you can open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How i compared electricity providers

### Calculation of annual consumption
I used the 500 hours of data that was provided, and saw that this data was from winter months, and therefore calculated the average daily usage. To calculate the annual conumption I set up the amount of days in each season, and a rate for how much power you would use for each season. 

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