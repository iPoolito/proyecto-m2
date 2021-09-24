const mongoose = require('mongoose')
const connectingDB = async () => {
  // ERROR HANDLING - try catch - node.js
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    return console.log('Conectados a la base de datos')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectingDB
