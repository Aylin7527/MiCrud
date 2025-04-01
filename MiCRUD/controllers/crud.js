const conexion = require('../database/db');
const db = require('../database/db');

exports.save = (req, res) => {
    const { nombre, descripcion, precio, cantidadStock, categoria } = req.body;
    conexion.query('INSERT INTO productos SET ?', 
    { nombre, descripcion, precio, cantidadStock, categoria }, 
    (error, results) => {
        if (error) {
            console.log('Error al guardar:', error);
        } else {
            res.redirect('/');
        }
    });
};

exports.update = (req, res) => {
    const { id, nombre, descripcion, precio, cantidadStock, categoria } = req.body;
    conexion.query(
        'UPDATE productos SET ? WHERE id = ?',
        [{ nombre, descripcion, precio, cantidadStock, categoria }, id],
        (error, results) => {
            if (error) {
                console.error('Error al actualizar el producto:', error);
                return res.status(500).send('Error al actualizar el producto');
            }
            res.redirect('/');
        }
    );
};
