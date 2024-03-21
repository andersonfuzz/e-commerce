import mysql from "mysql2/promise";
const connection = mysql.createPool({
    database: process.env.DB,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
});

export default connection;
