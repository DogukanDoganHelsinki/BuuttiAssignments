# Assignments for Lecture 13


## Assignment 13.1: Preparing Local Environment

1. Start your local instances of Postgres
```
docker run --name my-postgres --env POSTGRES_PASSWORD=pgpass --env POSTGRES_USER=pguser -p 5432:5432 -d postgres:14.5
```
2. Start your local instance of PgAdmin
```
docker run --name my-pgadmin -p 5050:80 -e "PGADMIN_DEFAULT_EMAIL=<admin-email>" -e "PGADMIN_DEFAULT_PASSWORD=admin" -d dpage/pgadmin4
```
3. Go to http://localhost:5050 and login to your pgAdmin using the credentials set in previous step
4. Connect to my-postgres
    - `docker inspect my-postgres | grep IPAddress`


## Assignment 13.2: Preparing Database

Using either PgAdmin or PSQL
1. Create a new database called sqlpractice
2. Insert the [provided query](init_library.sql) to the new database
3. Verify that the query has created new tables to your database


## Assignment 13.3: Querying the library

Using SQL queries, get
1. all columns of borrows that are borrowed before 2022-07-20
2. all columns of borrows that are returned
3. columns user.full_name and borrows.borrowed_at of the user with an id of 1
4. columns `book.name`, `book.release_year` and `language.name` of all books that are released after 1960

## Assignment 13.4: Editing data

1) Postpone the due date of the borrow with an id of 1 by two days in the borrows table
2) Add a couple of new books to the books table


## Assignment 13.5: PostgreSQL & Node

Following the lecture example, create an Express server that connects to your local PostgreSQL instance. The database information should be stored in environment variables. 
When the server starts, it should create a product table with three columns: id (varchar, primary key), name (varchar) and price (integer).


## Assignment 13.6: Creating Queries

