const express = require('express');
const app = express();
const path = require('path');
const version = require('../../package.json').version;

// Set Express Properties =========================================
app.use("/assets", express.static(__dirname + "/assets"));
app.use(express.static(__dirname + '/public'));
app.use('/media', express.static(__dirname + '/assets/img'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

//! GET requsts ===================================================

// Default Endpoints ==============================================
require('./routes/default/home')(app);
require('./routes/default/aboutus')(app);
require('./routes/default/supporters')(app);
require('./routes/default/privacypolicy')(app);

// Item Endpoints =================================================
require('./routes/items/item')(app);
require('./routes/items/items')(app);
require('./routes/assets/image')(app);
require('./routes/items/album')(app);
// require('./routes/items/itemImage')(app);
require('./routes/items/valueChanges')(app);
require('./routes/items/tradeCalculator')(app);

// Blog Endpoints =================================================
require('./routes/blog/blog')(app);
require('./routes/blog/blogPost')(app);

// Utility Endpoints ==============================================
require('./routes/list/archive')(app);
require('./routes/list/group')(app);

// API Endpoint ===================================================
// Items
require('./routes/api/get/itemList')(app);
require('./routes/api/get/itemData')(app);

//! POST requests
// TODO add in bot that can update values in database.


// Error Endpoints ================================================
app.all('*', (req, res) => {
    res.status(404).render('error', {
        title: "STKValues - Error",
        error_code: "404: This page does not exist.",
        version: version
    })
  });
// Export the app.
module.exports = app;