const mysql = require('mysql2');

// Crear un pool de conexiones
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', // Contraseña de tu base de datos
    database: 'tienda_online', // Nombre de tu base de datos
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Usamos `promise()` para poder usar async/await
module.exports = pool.promise();
