const mysql = require('mysql');
const { promisify } = require('util');

const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if(err){
        if(err.coe === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANY CONNECTION');
        }    
        if(err.code === 'ECONNREFUSED'){
            console.error('DATABASE CONNECTION WAS REFUSED');
        }    
    }
    if(connection) connection.release();
    console.log('db IS CONNECT');
    
    return;
});

//Promisify Pool Query. Esto permite promesas, antes era con callbacks
pool.query = promisify(pool.query);

module.exports = pool;

