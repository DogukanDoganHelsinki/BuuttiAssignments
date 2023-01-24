# Assignments for Lecture 10

<!-- Lecture Assignments -->


## Assignment 10.1: Students Router

Let's continue improving the Students API we created on the last lecture. 

Add a `studentRouter.js` file that exports a **router** with all the five routes the app currently has.

## Assignment 10.2: Registration

Create and attach a new router, `userRouter.js` that has a single endpoint:  `POST /register` .

The endpoint should 
- expect a request body with two parameters, *username* and *password*. 
- create a **hash** from the password using the **Argon2 library**. 
- store the username and the hash in an **in-memory storage** (e.g. let users = [ ... ]) and log the result to the console. 
- return a response with status code **401 (Created)** on success


## Assignment 10.3: Login

Add another endpoint to the user router: `POST /login` that also expects two request body parameters, *username* and *password*.

The endpoint should 
- check that the user exists in the in-memory storage. 
- if the user exists, it should use the **Argon2 library** to verify that the given password matches the stored hash. 
- if they match, it should return a response with status code **204 (No Content)**. 
- if the user does not exist, or the password doesn't match the hash, it should return a response with status code **401 (Unauthorized)**. 


## Assignment 10.4: Environmental Login

Add an **admin login** to the Students API. We want to store admin credentials in **environment variables**.
- Add **dotenv** library as dependency.
- Add a `.env`file that defines an admin username and an admin password hash.

Add enpoint `POST /admin` that also expects two request body parameters, *username* and *password*.

The endpoint should
- check that the username matches the admin username defined in the .env file
- check that the password matches the admin password defined in the .env file
- if they match, it should return a response with status code **204 (No Content)**
- if they do not match, it should return a response with status code **401 (Unauthorized)**


## Assignment 10.6: Verify a Token

Write a simple command line program that *verifies* JSON Web tokens.

The program should print the contents of the verified token. If the token is not valid, the program should print an error message and exit gracefully.

Create a JWT in https://jwt.io debugger. Remember to set your secret value. Use your program to verify the token and see that the data entered is as it should be.

## Assignment 10.7: Securing a Route

Modify the Students API `/register` and `/login` routes so that on success they return a response with status code 200 and a JWT with username as payload.

Secure all the routes in the students router so that they require the user to be logged in to use the routes.

**Extra**: Also modify the `/admin` route to return a JWT. Secure the POST, PUT and DELETE routes to require that in addition to being logged in, the user also needs to be an admin.

**Hint**: Here you have some resources on sending a token with Postman.
https://learning.postman.com/docs/sending-requests/authorization/


## Assignment 10.8: Test with Jest

Write a function **summation** that takes one integer parameter *n* and calculates the sum of all integers smaller or equal to n.

Write tests for this function. Include at least three test cases.


## Assignment 10.9: Test with Supertest

Use Supertest with Jest to create tests for the Students API  `/user/register`  and  `/user/login`  routes.


<!-- Homework Assignments -->

## Assignment 10.10: Securing Books API

Add token based authentication to the Books API created in the previous assignment set. The API should have two endpoints `/api/v1/users/login` and `/api/v1/users/register` that handle the login and registration. Both should expect two body parameters, *username* and *password*.

Login endpoint should check if the user exists. If the user does exist, it should compare the **hashed** password against the password user has sent. If the passwords match, it should send a response with a signed JSON Web Token. 

Register endpoint should check if the user exists. If the user does not exist, it should hash the received password and store the username and the hash in an in-memory storage. On success, it should send a response with a signed JSON Web Token.

All book routes should be secured to require a bearer token to access them. On any error a response with appropriate status code and error message should be sent.

**Hint**: Use separate routers for books and users.


## Assignment 10.11: Two Levels of Users

Add a hardcoded user, *admin*, to the Books API. Admin user should exist when the program starts, and nobody should be able to register a new user with this username. The password hash **must not** be hard-coded to the program.

When admin user logs in, the returned signed token should include a parameter `isAdmin: true`.

Secure the *modifying routes* (POST, PUT, DELETE) in the books router so that they can only be accessed if the user is an admin. The other routes (GET) should still be accessible by all registered users.


## Assignment 10.12: Book API Tests

Write unit tests for the users router of Books API. The tests should verify that all the features mentioned in the assignments work as expected.