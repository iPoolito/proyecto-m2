//Importaciones

const express = require('express')
const app = express()
const hbs = require('hbs')

const connectingDB = require('./config/db')

//Middlewares

//Activacion de variables de entorno(DOTENV)
require('dotenv').config()
//Activacion de base de datos
connectingDB()
//Activacion de carpeta public
app.use(express.static(__dirname + '/public'))
//Activacion de la carpeta de vistas
app.set('view engine', 'hbs')
//Activacion de recepcion de datos en formularios
app.use(express.urlencoded({ extended: true }))
//Activacion de gestion de sesiones
require('./config/session-config')(app) // Descomentar esto me da un error en el heroku ERROR HEROKU

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
//ruta del home
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
