const mysql=require('mysql2');

const pool=mysql.createPool({
    host:"localhost",
    username:"root",
    database:"node-complete",
    password:"shivam26"
});

module.exports=pool.promise();