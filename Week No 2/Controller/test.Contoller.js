const { todo, sequelize } = require("../model/todo.model.js");

const InsertData = async (req, res, next) => {
    sequelize.sync().then(() => {
        console.log('todo created successfully!');
        todo.create({
            Name: "finet",
            ID: 103
        }).then(result => {
            console.log(result)
            res.json({ message: "Create Successfully" })
        }).catch((error) => {
            console.error('Failed to create a new  data: ', error);
        });
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
}

const SelectData = (req, res, next) => {
    console.log("ready to Execute");
    sequelize.sync().then(() => {
        todo.findAll().then(result => { res.json({ message: result }) }).catch((error) => {
            console.error('Failed to fetch data : ', error);
        });
    }).catch(err => {
        console.error('Unable to create table : ', err);
    })
}
const DeleteData = (req, res, next) => {
    console.log("ready to execute");
    sequelize.sync().then(() => {
        todo.destroy({
            where: {
                ID: 101
            }
        }).then(result => {
            console.log(result)

            res.json({ message: "Delete Successfully" })
        }).catch((error) => {
            console.error('Failed to delete data: ', error);
        });
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
}

const UpdateData = (req, res, next) => {
    console.log("ready to execute");
    sequelize.sync().then(() => {
        todo.update({ Name: 'Mobile' }, {
            where: {
                ID: 102
            }
        }).then(result => {
            console.log(result)
            res.json({ message: "Update Successfully" })
        }).catch((error) => {
            console.error('Failed to Update data: ', error);
        });
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
}


module.exports = { InsertData, SelectData, DeleteData, UpdateData };