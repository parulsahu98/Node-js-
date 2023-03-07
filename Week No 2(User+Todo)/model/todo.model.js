

import {Sequelize, DataTypes} from "sequelize";

 import Seq from 'sequelize';
 export const sequelize = new Seq(
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

export const todo = sequelize.define("todo", {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }, 
  Name: {
     type: DataTypes.STRING,
   },
  Status:{
    type: DataTypes.STRING
  },
  Level:{
    type: DataTypes.INTEGER
  }
  });
 