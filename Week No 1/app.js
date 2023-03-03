const express = require ('express');
 // import the routes
const mysql =require('mysql');
 const routes = require('./router/test.Router.js');
const app = express();
app.use(express.json());
 app.use('/', routes); //to use the routes
 
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})