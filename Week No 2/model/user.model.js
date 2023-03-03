// const sequelize =require('./connection.js');
const {Sequelize, DataTypes} = require("sequelize");


const Seq =require ('sequelize');
const sequelize = new Seq(
  'week_2',
  'root',
  'siyatech@194',
   {
     host: 'localhost',
     dialect: 'mysql'
   }
 );

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

const user = sequelize.define("user", {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    UserName: {
        type: DataTypes.STRING,
    },
    Password: {
        type: DataTypes.STRING,
    },
    IsLog: {
        type: DataTypes.STRING
    },
    Image:{
        type: DataTypes.STRING,
    }
});


module.exports = {user};