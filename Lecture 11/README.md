# Assignments for Lecture 11

## Before we begin
If you have done something with Docker before, might be a good idea to check if you have running containers or stored images and remove them if not needed. For clarity's sake.

## Assignment 11.1: Intro to Docker

**Prerequisite**: Docker installed and ready to go.

Download and run our first container by entering the following in a command line. The flag `-it` stands for interactive terminal.
```docker run -it ubuntu```

Notice how it doesn’t find the image and resorts to getting one from **Docker Hub registry**. We now also have access to the terminal of the container.
Now we have our first image and container. We can later view them (in our own terminals) with the commands:
```
docker images
docker container ls
docker ps -a
```


## Assignment 11.2: Modifying Containers

Continuing from the last task, we now have a basic Ubuntu distro running in our new container. Lets run in the container terminal: `apt-get update` and install a small program to our Ubuntu with `apt-get install figlet`. 

Test the functionality with `figlet hello`.

If you exit the container now, and build it up straight after, Figlet won’t be there, as we modified the container, not the image it was based on. Next we want to create a new image with Figlet in it.


## Assignment 11.3: Modifying Images

One way to do this is to do a `docker commit`, that saves all changes made to said container into a new layer and creates a new image.
Let’s start our Ubuntu with docker `run -it ubuntu` and prep it with `apt-get update && apt-get install figlet`.
Next we exit the container, and with `docker ps x-lq` we can extract the id of the container we just exited. New image can then be created from modified container with `docker commit <yourContainerId>`

Check the id of the newly created image with `docker image ls`. Try running it with `docker run -it <imageId>` and test Figlet. This method is used less than docker build, but it’s useful for smaller scale stuff.


## Assignment 11.4: Using a Dockerfile

Better, automated way to create images is by using a *Dockerfile*.
Create an empty directory to hold your Dockerfile. In command line write: `mkdir myimage && cd myimage`.
Create the Dockerfile with your editor of choice. Repeat the earlier process, but this time with the Dockerfile to automate it; start with Ubuntu base image, run update on it and install figlet. 
Build an image from the Dockerfile with `docker build -t figlet .`

`-t` will create tag for image, named figlet
`.` indicates the location of the build context

Try running the image with `docker run -it figlet`


## Assignment 11.5: Dockerized Node App

1. Create a super simple Express app with one endpoint that returns "Hello World".
2. Create a Dockerfile and use that to create an image of your app
3. Run your app in a Docker container
4. Test the app with the tool of your choice


## Assignment 11.6: Using docker-compose

Initialize a few basic APIs, (for example: client, server, postgresql-database, or any empty api) and create Dockerfile for each. In that Dockerfile select correct base image for each api, copy relevant data and configurations and install all dependencies as shown earlier. Make sure some data moves between apis.

Write a docker.compose.yml file where you control each service and try to start them with `docker-compose up`. Note that in docker-compose file you must specify the paths to the correct Dockerfiles (in relation to docker-compose file) in *build*-attribute. In our example file, we specify the location, where to find the Dockerfile. Specify client entry point (`localhost:<portnumber>`) and navigate there to see the API's in action.


<!-- Homework Assignments -->

## Assignment 11.7: Comparing Base Images

Write a Node.js application that prints a single line of text. Notice that you do not need a package.json file nor any dependencies for this. Create four Docker images of the application with
1. `node:latest` base image
2. `node:slim` base image
3. `node:alpine` base image
4. `alpine:latest` linux base image with Node and NPM installed with `RUN apk add --update nodejs npm`

All Node images of course have Node and NPM pre-installed. Alpine Linux is just a (very lightweight) linux distribution, so it does not come with Node and NPM. They need to be installed before Node programs can be executed.

Compare the sizes of the images. Why would you prefer one of these images over another?


## Assignment 11.8: Whale Read Fibonacci

Write a program that, starting from zero, every second prints out the next number in the fibonacci sequence. Add a Dockerfile, build an image of the app, and run the image in a Docker container.


## Assignment 11.9: Notice Board

Build an API that represents a public notice board. The api should have endpoints for creating, reading, and deleting notes.

Add a Dockerfile and build an image of the app. Run the app in a Docker container.

## Extra Assignmnet 11.10: Secure Notice Board (Hard)

Add secret note endpoints to your notice board. There should be endpoits to create, read, and delete secret notices. To access any of these endpoints user should need to provide a username and a password. 

Build an API that provides a protected endpoint. To access the endpoint the user should send a username and a password either on basic authentication header or request body. The endpoint should verify that the credentials are valid, and if so, serve the secret content. Remember that secret information needs to be provided via environment variables.

Create a Dockerfile for the app. Build the app image so that the environment variables are provided to Docker during the **build time**, resulting in a container that can be run without giving any environment variable information.

Run your application in a container. Make sure the secret is served if and only if the user provides correct username and password.