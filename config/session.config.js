const session = require('express-session')
const MongoStore = require('connect-mongo')

//Generar Sesion
//Crear Cookie

const generateSession = app => {
  app.set('trust proxy', 1)

  app.use(
    session({
      secret: process.env.SECRET,
      resave: true,
      saveUninitialized: false,
      cookie: {
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 60000 // tiempo en el que expira la cooki
      },
      store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
      })
    })
  )
}
//exportacion de la sesion
module.exports = generateSession
