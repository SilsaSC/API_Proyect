const express = require('express'); //de esta forma se importa en node
require('dotenv').config();
const { dbConection } = require('./config/database');
const cors = require('cors');

//Creando el servidor express
const app = express();

//Configuración del Cords
app.use(cors());

//Estableciendo conexion a la base de datos
dbConection();
console.log(process.env);
// Ruta de la API
app.get('/', (req, res) => {
    res.status(400).json({
        ok: true,
        msg: 'Bienvenidos a node'
    });
});

//Para levantar el servidor
//app.listen(3000, () => {
//     console.log('Servidor corriendo en el puerto ' + 3000)
// })
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
})