const express = require('express');
const app = express();

/* 
    To add a route to the back end, simply make a file following the same format as the other routes then require it here
    and pass app as the only argument.  This will register the route in the app and will allow for us to do this with really nice
    clean code.
*/

// Set Express Properties =========================================
//* Set whatever express properties we need to here.

//! GET requsts ===================================================

// Default Endpoints ==============================================
require('./routes/basic/home')(app);

// Blog Endpoints =================================================
;

// Utility Endpoints ==============================================


// API Endpoint ===================================================


//! POST requests
// TODO add in bot that can update values in database.


// Error Endpoints ================================================
app.all('*', (req, res) => {
    res.status(404).json({
        success: false, data: {error_code: 404, error_message: "This page does not exist."}
    });
});
// Export the app.
module.exports = app;