
// ==========================================
// DAY 1: BACKEND SERVER SETUP
// Technology: Node.js + Express.js
// ==========================================


// STEP 1: Load environment variables
// dotenv reads variables from the .env file
// and makes them available through process.env

require('dotenv').config();


// STEP 2: Import Express
// Express is a Node.js framework used to
// create servers and build REST APIs.

const express = require('express');


// STEP 3: Create Express application
// express() creates an application instance.
// We use this instance to configure middleware,
// routes, and start our server.

const app = express();


// STEP 4: Define server port
// process.env.PORT reads PORT from the .env file.
// If PORT is not defined, use 3000 as default.

const PORT = process.env.PORT || 3000;


// STEP 5: Start the server
// app.listen() starts the HTTP server.
// It listens for incoming requests on the given port.

app.listen(PORT, () => {

    // This callback executes when the server starts.
    console.log(`Server is running on port ${PORT}`);

});
