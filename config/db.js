//Requiero mongoose

const mongoose = require('mongoose')

const connectingDB = async () => {
  try {
    //Nos conectamos al servidor de mongo por la variable de entorno
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    return console.log('Conectados a la base de datos!')
  } catch (error) {
    console.log(error)
    //cierra el server
    process.exit(1)
  }
}
//Exportamos la conexion al servidor
module.exports = connectingDB
