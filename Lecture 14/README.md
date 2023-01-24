## Create a Database

Using a Dockerized version of a PostgreSQL database, create a new database called "musicdb". If using a command line tool, remember to connect to this database before continuing.

## Create Tables

Create two tables to the musicdb database. The first one should be called "artists". It should have columns id (serial) and name (varchar). The second should be called "albums". It should have columns id (serial), name (varchar), artist (integer, references the artists table) and release year (smallint).

Make sure both tables work by inserting some random values.

## Insert Data

Insert following albums to your database:
- Taivaan Kappaleita, Juice Leskinen, 1991
- Black and Blue, The Rolling Stones, 1976
- En Kommentoi, Antti Tuisku, 2015
- Elvis is Back!, Elvis Presley, 1958
- III, Eveliina, 2020

## Modify Data

Update the album Elvis is Back! release year to be 1960. Update the artist Eveliina to be Evelina. Delete the random data you inserted in the creation stage.

## Read Data

Write a query with a JOIN statement that gets every album, their artist name, and the release year in one statement.

Write a query that finds all artists that have released an album since 1990.

## Create an Express App

Write an Express API that connects to your local database and has one endpoint: `GET /artists` that returns the full artist list. Do not write anything more complex before you have this one endpoint working.

## Create a Manual Testing Template

Using Postman, Insomnia, or VSCode plugin, create a collection of requests for all CRUD operations for both albums and artists. You should end up with (at least) ten requests (two GET requests and one each of POST, PUT, and DELETE, for artists and albums both). You can not yet test these, since we have not created but one of the endpoints.

## Add Endpoints to the App.

Add all basic CRUD endpoints to your app for both albums and artists. Include an optional year query parameter to your `GET /albums` endpoint that accepts parameters *from* and *to*. If these are given, the endpoint should return only albums within the given year range.

Add three more requests to your testing template: one with just from year, one with just to year and one with both from and to year parameters provided.

## Create Tests

Write a test suite that mocks the database and tests the endpoints. 

##  PostgreSQL in Azure

Create a PostgreSQL database instance in Azure. Remember to allow access from other Azure services so we can connect our app to it.

## Dockerize your App

Add a Dockerfile to your app. In addition to all the information always required in an express app, the file will need ARG and ENV parameters that correspond to the environment variables needed in the app.

## Prepare Gitlab CI/CD Pipeline

Create a new Gitlab project for your App. Set all the required environment variables. You will need at least app port, Azure Container Registry address, username and password, Database address, port, username, password and database name.

Add a .gitlab-ci.yml file to your project that includes a stage that will build your app as a docker image and push it to Azure container registry. Remember to give a unique name to your image, so you don't accidentally overwrite each other's containers.

## Add Azure App Service

The image of yoour app should be in ACR since your Gitlab pipeline should have built and pushed it in the last stage. Create an Azure App Service that will run your Dockerized application. Remember to enable continuous integration, so the app will update every time the container registry is updated.

## Manually Test the App in Azure

Using your manual testing template, check that all the endpoints work as desired also in the cloud app.







