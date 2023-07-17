/*
connectivity without sequelize package

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'shivam26'
});

module.exports = pool.promise();
*/

//connectivity with sequelize package

const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "shivam26", {
  dialect: "mysql",
  host: "localhost",
});

module.exports=sequelize;