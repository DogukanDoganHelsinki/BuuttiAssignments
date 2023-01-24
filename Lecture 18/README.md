# Assignments for Lecture 18

<!-- Lecture Assignments -->

## Assignment 18.1: Express Backend

1. Create a Gitlab repository for today’s project.
2. Create an express backend with one endpoint `GET /version` that returns a version number.
3. Dockerize it.

## Assignment 18.2: Azure Initialization

1. Create an Azure Web App
2. Deploy your Dockerized container to the AWA
3. Turn on logging
4. Turn on Continuous Deployment

## Assignment 18.3: Gitlab CI/CD

1. Create a .gitlab-ci.yml file that deploys a new version directly to the Azure Web App
2. Update the version number of your app and push the changes. Make sure that the new version gets deployed. 

## Assignment 18.4: React Frontend

1. Create a React frontend that displays the version number
    - The front should run in development mode so that the backend server and frontend app are run separately
    - Use proxying for the backend addresses
2. Update your backend to serve the distribution build of the frontend
3. Update your Dockerfile to include the frontend in your Docker image
4. Make sure that the app works locally
5. Push changes and see that the cloudified app works.

## Assignment 18.5: Todo App

1. Create a Todo App to your React frontend
    - Cheat and copy existing code :) You can use your own project or example answer from assignment 15.7
2. odify it enough so that it has a button for adding todo items (if it doesn’t already have such thing)

## Assignmen 18.6: Frontend Tests

1. Create a few tests for your frontend
2. Configure your CI/CD pipeline to run the tests before deployment
3. Push a new version of your app with tests to the repo

## Assignment 18.7: Full Stack Madness

1. Make your app use your backend for the todos
2. Create just three endpoints:
    - GET endpoint that returns all todo items
    - POST endpoint that adds a todo item
    - DELETE endpoint that removes a todo item
3. Modify your frontend to use the endpoints whenever a todo is added or removed

<!-- Homework Assignments -->
## Assignment 18.8: Tests for Songbook

Continue developing the song book you started in Lecture 17 homework assignments.

Using **Vitest**, crete a test suite for your app. 
- You can choose what kind of tests to include, but the tests must test something related to the React user interface. 
- Since there is no CI/CD pipeline in our app, it is enough that the test suite can be ran locally.

## Assignment 18.9: Finished Songbook

Finish your songbook assignments from Lecture 17.

## Extra Bonus Assignment 18.10: Make it Fly

Deploy your containerized app to [Fly.io](https://fly.io)