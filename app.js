//Importaciones
require('dotenv').config()
const express = require('express')
const app = express()
const hbs = require('hbs')

//const connectingDB = require('./config/db')

//Middlewares

//Activacion de variables de entorno(DOTENV)

require('./db/index')
//Activacion de base de datos
//connectingDB()
require('./config')(app)
//Activacion de gestion de sesiones
//require('./config/session-config')(app) // Descomentar esto me da un error en el heroku ERROR HEROKU
const generateSession = require('./config/session-config')
generateSession(app)
//MONGODB AQUI ANTES
//Establecer el valor de req.session para poder ser utilizado por hbs
/**/
app.use((req, res, next) => {
  res.locals.currentUser = req.session.currentUser
  next()
})

//RUTEO

const index = require('./routes/index')
const auth = require('./routes/auth')
const authlog = require('./routes/authlog')
const userp = require('./routes/user')

//http://localhost:3000/
app.use('/', index)
//http://localhost:3000/signup
app.use('/signup', auth)
//http://localhost:3000/login
app.use('/login', authlog)
//http://localhost:3000/user
app.use('/user', userp)

//Manejo de errores
require('./error-handling')(app)
//Servidor
app.listen(process.env.PORT, () => {
  console.log(`Servidor activado: ${process.env.PORT}`)
  return
})
