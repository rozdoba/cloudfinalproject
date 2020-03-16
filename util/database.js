let mysql = require('mysql2');
/*
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'software_dev1',
    password: 'root'
});
*/

const pool = mysql.createPool({
    host: 'remotemysql.com',
    user: 'XfTrQvmMyk',
    database: 'XfTrQvmMyk',
    password: 'abYXciGFkQ'
});

module.exports = pool.promise();