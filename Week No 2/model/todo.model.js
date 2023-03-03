

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

const todo = sequelize.define("todo", {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  }, 
  Name: {
     type: DataTypes.STRING,
   },
   Date:{
    type:DataTypes.STRING,
   },
   Status:{
    type: DataTypes.STRING
   }
});


  module.exports = {todo};