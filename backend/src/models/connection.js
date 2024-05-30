const mysql = require('mysql2')

require('dotenv').config()

const connection = mysql.createPool({
    host: process.env.MYSQL_SERVER,
    user: process.env.MYSQL_USER ,
    password: process.env.MYSQL_PASSWORD ,
    database:  process.env.MYSQL_DATABASE,
    connectTimeout: 10000, 
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})


module.exports = connection

