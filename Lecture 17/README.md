# Assignments for Lecture 17

<!-- Lecture Assignments -->

## Assignment 17.1: React with Routes

Using React Router, create an app that can handle two routes: 
- `/contacts`  directs to a contact page.
- `/admin`  directs to an admin page.

You can use placeholder content in the components. You do not need to make a main page or handle errors.

## Assignment 17.2: Contact Routes

Continue with the app you created in the previous assignment. Create at least three contacts in an in-memory list. Each contact should have a name, a phone number, an email address and an id.
Replace your `/contact` route with `/contact/:id` route. Modify your contact component (and its route) so that it uses the `:id` path parameter to find a contact from the list of contacts, and displays only the information of a single contact.


## Assignment 17.3: Navigation

Add a navigation bar to your page. It should contain links to all the contacts. When the link is clicked, the contact details become visible. 
The navigation bar should remain visible all the time.


## Assignment 17.4: Error Handling

Add an error element to your application. The app should show a *404 Not Found*, when user tries to access a route that has not been defined.
Remember that the `/admin` route still needs to be accessible!


## Assignment 17.5: Inline Styles

Using only inline styles, create a React app that has a coloured box in the center of the screen, and the colour hex code printed above it. Every time the box is clicked, the colour of the box changes.
**Hint**: Don’t try to come up with an algorithm for random colours yourself. Just google it.


## Assignment 17.6: Try PropTypes

Create a React component **List** that takes three props: *name*, *elements*, and *decoration*. The component renders the name of the list and then all the elements in an unordered list (ul). The decoration should be either ‘bold’, ‘italic’, ‘both’, or ‘none’. The text should reflect this choice in both the list name and the list itself. Use PropTypes to make sure that 
1. The name property exists and is of type string
2. The elements property exists and is an array of strings
3. The decoration property is one of the allowed values OR does not exist.

Create another component and try out your List component. See what happens when the passed props are of incorrect type.


<!-- Homework Assignments -->

## Notes about the homework assignments
- **Do not do any of the bonus assignments** before you have finished **all** of the basic forms of the assignments.
- Do every assignment in a separate folder. When you have finished with one part, just copy the existing folder as the starting point of the next assignment. 
- This is a large assignment, and it is quite possible you won't be able to finish all in one day that is reserved for it. **That is OK**. The focus is on the React Router application. Before doing anyting with Azure, you should have a locally running app fully functional with a local database.
- Keep it simple! Don't do more than was asked before you have done _all_ that was asked.

## Assignment 17.7: Song Book

Create a song book React app using **React Router**. The app should have a list of at least five songs visible all the time. When you click a song, the full song should appear in the screen, including the title and the lyrics.

Use a hard-coded list for the songs in this assignment. You can use the [attached example](songs.js) (taken from [Virsikirja.fi](https://virsikirja.fi)) or create your own. Don't spend too much time on this, we just want a working example. It is enough for the program to run on a development server.

Every song should have an ID, and each song should have a unique address in the site, corresponding to the song ID. E.g. if user types the url http://localhost:5173/45 the site should open the song #45 instead of the main page. If the user enters an invalid address, an informative error message should be shown. 

**Bonus 1**: The currently selected song should be higlighted in the song list.
**Bonus 2**: Include a search function for the songs. The search should narrow down the list of songs when user types something to a search field without user having to press a submit button.
**Bonus 3**: Make it pretty :) Do this *after* you've finished the rest of the assignments.


## Assignment 17.8: Song Book Backend

Create a backend for your song book app. It should be an **Express** server with just two endpoints: 
- `GET /songs` should return a list of all song id's and titles, _without_ lyrics. 
- `GET /songs/:id` should return the full song corresponding to the id, including id, title and lyrics. If there is no such song, a correct error response should be returned.

Use a hard-coded list for the songs in this assignment also. You can use the same file as you used before.

Refactor your **React** app to use the backend. 
- Modify your `vite.config.js` file so that your development server proxies all requests to `/songs` to your backend server and you do not have to use absolute addresses in your code.
- Modify the program logic to load the song list on startup and the lyrics only when the appropriate page is loaded.

The app should have a side-by-side structure, as in you should have both frontend and backend on the same level inside your project folder. The project should be possible to run two ways:
- Development mode: The backend running on nodemon and frontend on vite dev server
- Production mode: The whole app running as backend server, the frontend served as static website using a production build.

**Bonus 1**: Include endpoints for adding songs.
**Bonus 2**: Include endpoint for deleting songs.
**Bonus 3**: Include endpoint for updating songs.

## Assignment 17.9: Dockerized Song Book

Dockerize your song book app. You should not need to make any changes to the program code in this assignment, just create a working Dockerifle. 

When the docker image has been built, you should be able to run the image locally and start the app using just Docker.

**Bonus**: Push your image to Azure Container Registry. Then create Azure Web App and deploy your app in a container. Do this *manually*, ie. do not create a Gitlab pipeline, but give all commands from the command line.

## Assignment 17.10: Songbook Database

Add a **Postgresql** database to your app. Using the official PostgreSQL Docker image, start a local database server. Using either psql, pgAdmin, or some other database client, *Manually* create a table for your songs, with columns for id, title, and lyrics. *Manually* insert at least five songs into your database. Include the commands you used in a .sql file in your answer.

Refactor your backend to use your database instead of the hardcoded songs.

**Bonus**: Create an Azure Database for PostgreSQL Server. Make your API use Azure database instead of the local database. Remember that if you allow connections from your local IP address, you can test the database from your own machine using pgAdmin or other database client. You can also run your app locally from a Docker container using the Azure database, if the IP is allowed in your database server.

