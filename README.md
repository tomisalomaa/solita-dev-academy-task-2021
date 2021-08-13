# vaccination-exercise

This exercise is based on https://github.com/solita/vaccine-exercise-2021. Developed for applying to Solita Dev Akatemia (fall, 2021).

## Introduction
THL has ordered us to create a vaccination database which contains information about vaccine orders and vaccinations. We have received files which contains the base data for the application. The Orders are in different files named by the manufacturer of a vaccine. Injections must be used in 30 days after the arrival of the bottle.

## Instructions - How to install and run the app

### Before installation

Make sure Node.js is installed. If not installed, visit [here](https://nodejs.org/en/).
After Node.js is available, clone or copy the contents of this repository and follow the steps below.

### 1) Installing backend and frontend

1. Navigate to /server/ folder of the project and install dependencies with command:

    npm install

2. Repeat step 1 in /client/ to install the frontend

### 2) Running the app

1. Start server by running the following command inside the /server/ directory:

    npm run dev

2. Start the client from the /client/ directory with the command:

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