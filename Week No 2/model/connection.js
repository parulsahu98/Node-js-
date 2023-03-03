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

module.exports = {sequelize};