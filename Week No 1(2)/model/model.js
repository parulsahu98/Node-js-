const Seq =require ('sequelize');
const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Seq(
  'week1_1',
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


const product = sequelize.define("product", {
  Name: {
     type: DataTypes.STRING,
   },
   ID: {
     type: DataTypes.INTEGER,
     primaryKey: true,
   }
});


  module.exports = {product,sequelize};