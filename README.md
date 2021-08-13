# vaccination-exercise

This exercise is based on https://github.com/solita/vaccine-exercise-2021. Developed for applying to Solita Dev Akatemia (fall, 2021).

## Live demo

A demo of this app is deployed [here on Heroku](https://fathomless-fjord-13408.herokuapp.com/).
The database for the demo is on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

Note: both the Heroku and Atlas platforms have a tendency to go into an "inactive" mode if no calls have been made in a certain period of time. If the demo page seems to load for a long time, this might be the case. The services wake themselves up when requests are detected so trying again a bit later should do it.

## Instructions - How to install and run the app

### Before installation

Make sure Node.js is installed. If not installed, visit [here](https://nodejs.org/en/).
After Node.js is available, clone or copy the contents of this repository and follow the steps below.

### 1) Installing backend and frontend

Navigate to /server/ folder of the project and install dependencies with command:

    npm install

Repeat above in /client/ to install the frontend

### 2) Running the app

Start server by running the following command inside the /server/ directory:

    npm run dev

Start the client from the /client/ directory with the command:

    npm start serve

Server should be running at localhost:8080 and client at localhost:8081

### 3) Build the app

To build the app, run the following command inside the client directory:

    npm run build

A /dist/ directory with the produced build will appear inside the /client/ directory. Copy the /dist/ with its contents into the /server/ directory and configurate server.js as needed for your deployment purposes.

## Task

Make a web application for presenting some interesting data about the vaccinations.

## Technology choices and their use

This app has been developed with **M**ongoDB, **E**spress.js, **V**ue.js, **N**ode.js - **MEVN**-stack.

The given resource data is stored in local MongoDB No-SQL database for development and to cloud (MongoDB Atlas) for deployment version of the app.
Together with Express and Node they form the backend solution.

Frontend relies a lot on Vuetify to produce something that doesn't break the eyes of the beholder.

## List of examples given in the original task

For given day like 2021-04-12T11:10:06

* ~~How many orders and vaccines have arrived total?~~
* ~~How many of the vaccinations have been used?~~
* ~~How many orders/vaccines per producer?~~
* How many bottles have expired on the given day (remember a bottle expires 30 days after arrival)
* How many vaccines expired before the usage -> remember to decrease used injections from the expired bottle
* How many vaccines are left to use?
* How many vaccines are going to expire in the next 10 days?

## Helpful numbers given in the original task

* Total number of orders 5000
* Vaccinations done 7000
* "2021-03-20" arrived 61 orders.
* When counted from "2021-04-12T11:10:06.473587Z" 12590 vaccines expired before usage (injections in the expiring bottles 17423
  and injections done from the expired bottles 4833)

## Testing

This will include written info about the tests used for testing the app (hopefully..)
