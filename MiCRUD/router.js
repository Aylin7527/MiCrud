const express = require('express');
const router = express.Router();
const conexion = require('./database/db');  

router.get('/', async (req, res) => {
    try {
        const [results] = await conexion.query('SELECT * FROM productos');
        res.render('index', { results: results });
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        res.status(500).send('Error al obtener los productos');
    }
});


router.get('/edit/:id', async (req, res) => {
    const productoId = req.params.id;
    try {
        const [producto] = await conexion.query('SELECT * FROM productos WHERE ID = ?', [productoId]);

        if (producto.length > 0) {
            res.render('edit', { producto: producto[0] }); 
        } else {
            res.status(404).send('Producto no encontrado');
        }
    } catch (error) {
        console.error('Error al obtener el producto:', error);
        res.status(500).send('Error al obtener el producto');
    }
});


const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

router.post('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {

        await conexion.query('DELETE FROM productos WHERE id = ?', [id]);
        res.redirect('/');  
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        res.status(500).send('Error al eliminar el producto');
    }
});

router.post('/update', async (req, res) => {
    const { id, nombre, descripcion, precio, cantidadStock, categoria } = req.body;
    try {
        
        await conexion.query(
            'UPDATE productos SET Nombre = ?, Descripcion = ?, Precio = ?, CantidadStock = ?, Categoria = ? WHERE ID = ?',
            [nombre, descripcion, precio, cantidadStock, categoria, id]
        );

        res.redirect('/'); 
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).send('Error al actualizar el producto');
    }
});


module.exports = router;
