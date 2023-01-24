# Assignments for Lecture 12

## Assignment 12.1: Geographic Locations

Let’s assume you are deploying an application, using multiple different **Azure** services to the Azure Cloud.
What are the closest **geographic locations** for following services?
1. Azure Functions
2. Azure Container Apps


## Assignment 12.2: Downtime

How much of yearly downtime is allowed for following services, before Microsoft will compensate your losses?

1. AKS (Azure Kubernetes Service)
2. App Service with Free tier
3. Azure DNS

A little help with calculations: https://uptime.is/


## Assignment 12.3: Virtual Machine

Creating your first virtual machine.

1. Create a virtual machine following the given example (Remember to download the created .pem-file!)
2. Connect to your newly created VM with SSH `ssh -i <keyfile.pem> <username>@<vm_public_ip>`
3. Disconnect and remove your VM


## Assignment 12.4: Web App Service

1. Install "Azure Accounts", "Azure App Service" and "Docker" extension to your VSCode.
2. Create an App service in Azure portal following the example.
3. Profit! :)
4. Remove your application from Azure :(

## Assignment 12.5: Dockerized Web App

1. Create an API with one endpoint.
2. Dockerize it
3. Upload the image to Azure Container Registry
4. Create an Azure Web App using the image
5. Test that the service works
6. Remove the Web App and associated resources


## Assignment 12.6: Azure Function Project

Following the lecture instructions, create a new Azure Function Project with
- JavaScript as language
- HTTP trigger as template
- Anonymous authorization level

The function should expect a body parameter *input* of type *string*, and it should return that string transformed to upper case in the response body.

Test the function locally.


## Assignment 12.7: Azure Function Deployment

Create a new **Azure Function App** and **deploy** the function created in the previous assignment.

Test the function using Insomnia/Postman.

When finished, remove the function app and all associated resources.


<!-- Homework Assignments -->

## Assignment 12.8: Deploying an API

Create an Express API that produces random numbers. The user should be able to define three parameters: minimum, maximum, and wether the number should be an integer or not. Include a static page that has instructions on how the API works.

Create an Azure Web Application, and deploy the API to Azure. Make sure that the deployed application works as expected.


## Assignment 12.9: Deploying a Container

Deploy the Random API app to Azure using a Docker container. Create a new Azure Web Application for this.


## Assignment 12.10: HTTP Function

Create an Azure function with the same functionality as the Random API. Deploy the function to Azure.


## Bonus Assignment 12.11: Infinite Friends (Difficult)

This assignment requires some independent googling. The assignment has two parts

1. Build a Friends app. The app should have following features
    1. An API that allows you to add friends and list all existing friends
        - each friend should have a username, a name, and an email address
        - the list of friends can be stored in an in-memory storage
    2. Static front page that uses the API to get a list of friends and displays them on a `<table>`
2. Deploy the Friends app to Azure using either direct code deployment or a Docker container.
3. Build a timer-triggered Azure Function that every ten seconds adds a new friend to the Friends API.
    - Use [NameFake.com API](https://en.namefake.com/api) to generate friends
4. Deploy the function to Azure.
5. Watch in amazement when the friends list keeps growing!
6. Remove the Azure deployments when you're done.

**Hint**: You need to manage connections in Azure functions. The [official documentation](https://learn.microsoft.com/en-us/azure/azure-functions/manage-connections?tabs=javascript) recommends not using external libraries, but if you are not already well-versed in low-level javascript functions and handling streams, just use Axios.
