import express from 'express';
const router = express.Router();

// Importar el modelo
import Cliente from '../models/cliente';

// Ruta para crear cliente
router.post('/nuevo-cliente', async(req, res) => {
    const body = req.body;
    try {
        const clienteDB = await Cliente.create(body);
        res.status(200).json(clienteDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrió un error al crear el cliente',
            error
        })
    }
});


//Exportar configuración
module.exports = router;