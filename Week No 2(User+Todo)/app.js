import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import session from 'express-session';
// import passport from 'passport';
  import todoRoutes  from './router/todo.Router.js';
 import userRoutes from './router/user.Router.js';
 const app = express();

app.set('view engine', 'ejs');
// initializingPassport(passport);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({secret: 'dadereccvdreeer'}));
app.use(express.json());
// app.use(expressSession({secret:"secret"}))
// app.use(passport.initialize());
// app.use(passport.session());



  app.use('/todo', todoRoutes); //to use the routes
//  app.use('/user', userRoutes);
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})