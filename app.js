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
require('./config/session.config')(app)

//Establecer el valor de req.session para poder ser utilizado por hbs

app.use((req, res, next) => {
  res.locals.currentUser = req.session.currentUser
})

app.get('/', (req, res) => {
  res.render('index')
})