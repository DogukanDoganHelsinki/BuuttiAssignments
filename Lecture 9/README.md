# Assignments for Lecture 9


<!-- Lecture Assignments -->

## Assignment 9.1: Simple Request & Response

Create a basic HTTP-server application. The application should respond to GET requests by returns a response with the following content: "Hello world!".

Test your application either with *Postman* or by navigating with your browser to `http://localhost:<your_portnumber>` 


## Assignment 9.2: Simple Express Server

Create a basic Express.js application. The application should respond to GET requests by returns a response with the following content: "Hello world!".

**Extra**: After you have successfully created the first express application, add a new endpoint to it. So, in addition to accessing http://localhost:3000, try to send something back from http://localhost:3000/endpoint2. 


## Assignment 9.3: Counter Server

Create an API that consists of only one endpoint: `/counter`

Whenever you enter this endpoint from the browser, it should show you how many times the endpoint has been called, inside a h1 header.

**Extra**: Make it possible to set the counter to whichever integer with a query parameter /counter?number=5


## Assignment 9.4 Advanced Counter Server

Expand the API from the previous assignment by accepting a **name** through the counter endpoint: `/counter/:name`

When entering this endpoint, the server should return the count of how many times this named endpoint has been visited.

For example
 - Aaron enters /counter/Aaron 🠖 "Aaron was here 1 times"
 - Aaron enters /counter/Aaron 🠖 "Aaron was here 2 times"
 - Beatrice enters /counter/Beatrice 🠖 "Beatrice was here 1 times"
 - Aaron enters /counter/Aaron 🠖 "Aaron was here 3 times"


 ## Assignment 9.5: Logger Middleware

 Create a new project called **Student Registry**. We will be developing this program in stages during this lecture. For now it should have a single **GET** endpoint `/students` that returns an empty list.

 Create a **logger middleware** function that is used in all the project's endpoints. The middleware should log 
 1. the time the request was made
 2. the method of the request
 3. the url of the endpoint
 4. the request body

**Hint**: You need `express.json()` middleware to enable JSON body handling in express.


## Assignment 9.6: 404 Not Found

Add a **middleware function** that sends a response with **status code** 404 and an appropriate error message, if user tries to use an endpoint that does not exist.

If you have not already done so, move all your middleware to a separate file, to keep your program clean and readable.


## Assignment 9.7: Body Logging

Enable body parsing in your application. Modify your logger middleware so that in addition to existing functionality, it also logs the request body if it exists.

## Assignment 9.8: POST Requests

Add two more endpoints to your app:

`POST /student` should expect the request body to include student id, name and email. If some of these parameters are missing, the endpoint should return a response with status 400 and an error message. The endpoint should store the student information in an array called *students*. The endpoint should return an empty response with status code 201.

`GET /student/:id` should return the information of one single student, identified by the *id* request parameter. The response should be in JSON format. If there is no such student, the endpoint should return 404. 

Modify the `GET /students` endpoint to return the list of all student *ids*, without names or emails.


## Assignment 9.9: PUT and DELETE

Add two more endpoints to your app:

`PUT /student/:id` should expect the request body to include student name or email. If both are missing, the endpoint should return a response with status 400 and an error message. The endpoint should update an existing student identified by the request parameter *id*. 

`DELETE /student/:id` should remove a student identified by the request parameter *id*.

Both endpoints should return 404 if there is no student matching the request parameter *id*. On success both endpoint should return an empty response with status code 204.


## Assignment 9.10: Static

Add a static info page to your API. The page should be reachable from the root path `/` and it should include some information about all the endpoints in the API.


<!-- Homework Assignments -->

## Assignment 9.11: Calculator API

Create a calculating API. The API should have four **GET** endpoints. Each endpoint should accept a query parameter *numbers*, a comma-separated list of numbers. If the list includes an item that is not a number, the endpoint should return an error. If there is no numbers parameter, or the list is empty, the endpoint should return zero.

- `GET /add` should return the sum of all of the numbers.
- `GET /substract` should return the difference of the first number and all other numbers. 
    - e.g. `/substract?numbers=5,3,1` → `5 - 3 - 1 = 1`
- `GET /multiply` should return the product of all the parameters.
- `GET /divide` should return the quotient of first argument and all other parameters.
    - e.g. `/divide?numbers=100,10,5` → `(100 / 10) / 5 = 2`
    - if any but the the first parameter is zero, the endpoint should return an appropriate error message

**Hint**: Use a middleware to parse the numbers.

## Assignment 9.12: Books API

Create an express REST-API, which offers CRUD for your books. It should include following endpoinst
- `GET /api/v1/books` → Returns a list of all the books
- `GET /api/v1/books/{id}` → Returns a book with a corresponding ID.
- `POST /api/v1/books` → Creates a new book.
- `PUT /api/v1/books/{id}` → Modifies an existing book
- `DELETE /api/v1/books/{id}` → Removes a book with a corresponding id

Every book should have four parameters
- id (number)
- name (string)
- author (string)
- read (boolean)

**Note**: You don’t need to enable an actual database at this point. Simple runtime-cache (For example: let books = []) will do for now. Do not save to a file, as we might end up clouding this application later

**Hint**: Remember to use *nodemon* as dev-dependency to aid you in the development.


## Assignment 9.13: Improving the Book API

1. Create validator middleware to POST and PUT endpoints that checks that all the required parameters are present.

1. Create a 404 Not Found -errorhandler and use it in the application
2. Create a middleware for logging in the application. Make the logs readable. req-object contains a lot of needed data for this. Use Google if you need ideas or suggestions of how to achieve this. Do not use any external packages.
3. Add [helmet](https://github.com/helmetjs/helmet) to your application’s dependencies and create a basic setup for security. 
4. Make your application serve static HTML frontend.