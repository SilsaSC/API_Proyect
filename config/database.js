const mongoose = require('mongoose');
const dbConection = async() => {
        try {
            //Debemos utilizar la cadena de conexion que tenemos en mongocompass
            //await mongoose.connect('mongodb://adminproject:CZAYTJqtu8YqsMVw@cluster0-shard-00-00.ks622.mongodb.net:27017,cluster0-shard-00-01.ks622.mongodb.net:27017,cluster0-shard-00-02.ks622.mongodb.net:27017/proyectosdb?authSource=admin&replicaSet=atlas-11o73d-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true');
            await mongoose.connect(process.env.DB_CNN);
            console.log('Conexion exitosa a la BD')
        } catch (error) {
            console.log(error);
            throw new Error('Error al conectar a la BD');
        }
    }
    //Siempre se debe de exportar para trae scrip
module.exports = {
    dbConection
}