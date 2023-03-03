const express = require ('express');
const {fileURLToPath} =require( 'url');
const mysql =require('mysql');
//  const todoRoutes = require('./router/todo.Router.js');
 const userRoutes = require('./router/user.Router.js');
 const app = express();

app.set('view engine', 'ejs');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json());

//  app.use('/todo', todoRoutes); //to use the routes
 app.use('/user', userRoutes);
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})