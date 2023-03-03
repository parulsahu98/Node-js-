const { con } = require("../model/model.js");

const createDatabase = (req, res, next) => {
    console.log("ready to Execute");
    con.query("CREATE DATABASE week1", function (err, result) {
        if (err) throw err;
        console.log("Database created");
        res.json({ message: "Database created" });
    });
}
const createTable = (req, res, next) => {
    console.log("ready to Execute");
    con.query("CREATE TABLE PRODUCT (NAME VARCHAR(10),ID INT(5) PRIMARY KEY)", function (err, result) {
        if (err) throw err;
        console.log("TABLE created");
        res.json({ message: "TABLE created" });
    });
}
const InsertData = (req, res, next) => {
    console.log("ready to Execute");
    con.query("Insert into product (Name, ID) Value ('Mobile',103)", function (err, result) {
        if (err) throw err;
        console.log("Data Insert");
        res.json({ message: "Data Insert" });
    });
}
const SelectData = (req, res, next) => {
    console.log("ready to Execute");
    con.query("Select * from product", function (err, result) {
        if (err) throw err;
        console.log("Data Fetch");
        res.json({ message: result });
    });
}
const DeleteData = (req, res, next) => {
    console.log("ready to execute");
    con.query("DELETE FROM product WHERE ID = 101", function (err, result) {
        if (err) throw err;
        console.log("Data Deleted");
        res.json({ message: "data Deleted" });
    })
}
const UpdateData = (req, res, next) => {
    console.log("ready to execute");
    con.query("UPDATE product SET Name = 'Computer' WHERE ID = '102'", function (err, result) {
        if (err) throw err;
        console.log("Data Update");
        res.json({ message: "Data Update" });
    })
}
const DropTable = (req, res, next) => {
    console.log("ready to execute");
    con.query("Drop table product", function (err, result) {
        if (err) throw err;
        console.log("Table Droped");
        res.json({ message: "Table Droped" });
    })
}

module.exports = { createDatabase, createTable, InsertData, SelectData, DeleteData, UpdateData, DropTable };