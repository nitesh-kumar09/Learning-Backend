
/*
=================================================
DAY 2: EXPRESS.JS - ROUTING BASICS
=================================================

Topics Covered:
1. Importing Express
2. Creating Express Application
3. GET Request
4. Request (req)
5. Response (res)
6. Sending Response using res.send()
7. Multiple Routes
8. Starting the Server

=================================================
*/


// STEP 1: Import Express
// Express is a Node.js framework used to build
// web servers and REST APIs.

const express = require('express');


// STEP 2: Create Express Application
// express() creates an application instance.
// We use "app" to define routes and configure the server.

const app = express();


// STEP 3: Create Home Route
// app.get() handles HTTP GET requests.
//
// '/' = Root URL (Home Page)
//
// req = Request object (data coming from client)
// res = Response object (data sent back to client)
//
// res.send() sends a response to the client.

app.get('/', (req, res) => {

    res.send('Hello World!');

});


// STEP 4: Create About Route
// '/about' = About Page URL
//
// When a user visits /about using a GET request,
// this callback function executes.
//
// function(req, res) is another way to write
// a callback function (instead of an arrow function).

app.get('/about', function(req, res) {

    res.send('This is About page.');

});


// STEP 5: Start the Server
// app.listen() starts the Express server.
//
// 3000 = Port number
//
// The server listens for incoming HTTP requests
// on port 3000.

app.listen(3000, () => {

    console.log('Server is running on port 3000');

});
