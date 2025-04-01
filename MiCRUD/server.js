const express = require('express'); 
const mysql = require('mysql');

const app = express();
const PORT = 5000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tienda_online' 
});

db.connect((error) => {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1); 
    } else {
        console.log('✅ Conectado a la base de datos');
    }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post('/guardar', (req, res) => {
    const { nombre, descripcion, precio, cantidadStock, categoria} = req.body;

    if (!nombre || !descripcion || !precio || !cantidadStock || !categoria) {
        return res.status(400).send("Todos los campos son obligatorios");
    }

    const query = `INSERT INTO productos (nombre, descripcion, precio, cantidadStock, categoria) VALUES (?, ?, ?, ?, ?)`; 

    db.query(query, [nombre, descripcion, precio, cantidadStock, categoria], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).send("Error al guardar el producto");
        }
        res.redirect('/'); 
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
    db.end();
    console.log('🔴 Conexión a la base de datos cerrada');
    process.exit();
});