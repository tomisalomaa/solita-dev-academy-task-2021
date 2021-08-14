# vaccination-exercise

This exercise is based on https://github.com/solita/vaccine-exercise-2021. Developed for applying to Solita Dev Akatemia (fall, 2021).

## Live demo

A demo of this app is deployed [here on Heroku](https://fathomless-fjord-13408.herokuapp.com/).
The database for the demo is on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

Note: both the Heroku and Atlas platforms have a tendency to go into an "inactive" mode if no calls have been made in a certain period of time. If the demo page seems to load for a long time, this might be the case. The services wake themselves up when requests are detected so trying again a bit later should do it.

## Instructions - How to install and run the app

### Before installing the app

Make sure Node.js is installed. If not installed, visit [here](https://nodejs.org/en/).

The app has been developed with a MongoDB running locally and later deployed to connect to the MongoDB Atlas.
If you have no database solution of your own available or you want to follow through completely without the need to change app configurations, consider installing [MongoDB local](https://www.mongodb.com/try/download/community) and [MongoDB Database tools](https://www.mongodb.com/try/download/database-tools).

Afterwards clone or copy the contents of this repository and follow the steps below.

### 0) Building the database

If you already have a MongoDB set up, you can skip to "Creating the database, collections and feeding the source data as collection documents" to set up databases and collections with correct names and to import the .source files.

/server/.env holds the DB_URI address that should be updated if these instructions are not followed and you wish to use your own.

If you just installed MongoDB and tools, prepare for some command line gymnastics out-of-the-box.

#### Initializing

Start by navigating to the directory MongoDB installed and run "mongod.exe" from the /bin folder. On Windows the default path for the exe is:

        C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe

If the database does not initialize but the process closes instead, this is most likely due to a missing db folder. In the case of Windows-platform, the required directory has to be created:

    C:\data\db
    
After this running "mongod.exe" should initialize local database. Leave the process running and continue to creating the database.

#### Creating the database, collections and feeding the source data as collection documents

1) Run "mongo.exe" from the /bin directory to start the mongo shell for manipulating the local database. Give the following command in the shell to create a new database called "vaccinedb":

        use vaccinedb
    
 Shell should confirm the switch to vaccinedb. Let the Mongo Shell be as is, next we'll create collections and feed the .source data.
 
 2) With a new terminal / command prompt window navigate to the MongoDB Tools /bin directory. Replace the <path-to-source-files-in-git-repo> accordingly as well as the mongodb uri if needed. Otherwise give the following commands to use the mongoimport tool to create and fill database collections:

        mongoimport --uri mongodb://localhost:27017/vaccinedb --collection vaccines --type json --file <path-to-source-files-in-git-repo>/vaccinations.source
        
        mongoimport --uri mongodb://localhost:27017/vaccinedb --collection solarbuddhica --type json --file <path-to-source-files-in-git-repo>/SolarBuddhica.source
        
        mongoimport --uri mongodb://localhost:27017/vaccinedb --collection antiqua --type json --file <path-to-source-files-in-git-repo>/Antiqua.source
        
        mongoimport --uri mongodb://localhost:27017/vaccinedb --collection zerpfy --type json --file <path-to-source-files-in-git-repo>/Zerpfy.source
 
 The tool should inform about the success of each import with 0 fails if done correctly.
 
 3) Return to MongoDB Shell and check that the database and the collections have been created successfully by entering:
    
        show dbs
    
        show collections
    
  That's it! Local database up and running. Leave it be and let's move onwards to install the app itself.

### 1) Installing backend and frontend

Navigate to /server/ folder of the project and install dependencies with command:

    npm install

Repeat above in /client/ to install the frontend

### 2) Running the app

Start server by running the following command inside the /server/ directory:

    npm run dev

Start the client from the /client/ directory with the command:

    npm run serve

Server should be running at localhost:8080 and client at localhost:8081

Assuming the database is setup and both the server and the client are running, head to http://localhost:8081/ to see if the app works.

### 3) Build the app

To build the app, run the following command inside the client directory:

    npm run build

A /dist/ directory with the produced build will appear inside the /client/ directory. Copy the /dist/ with its contents into the /server/ directory and configurate server.js as needed for your deployment purposes.

### Running tests

Run tests from the /server/ directory with the following command:

     npm run test
        
        
## Technology choices

This app has been developed with **M**ongoDB, **E**spress.js, **V**ue.js, **N**ode.js - **MEVN**-stack.

The given resource data is stored in local MongoDB No-SQL database for development and to cloud (MongoDB Atlas) for deployment version of the app.
Together with Express and Node they form the backend solution.

Frontend relies a lot on Vuetify to produce something that doesn't break the eyes of the beholder.


## Original task

Make a web application for presenting some interesting data about the vaccinations.

    
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
