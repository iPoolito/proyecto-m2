const bcryptjs = require('bcryptjs')
const saltRounds = 10

const User = require('./../models/User')

//Carga el hbs con el form para crear una cuenta
exports.signIn = async (req, res) => {
  res.render('auth/user-create')
}

//Recibe los datos del formulario
exports.signInForm = async (req, res) => {
  //Destructuracion de objetos de los datos obtenidos del req.body
  const { username, email, password } = req.body
  //Se crea la base de la contrasena encriptada
  const salt = await bcryptjs.genSalt(saltRounds)
  //Con la base hecha, mezcla la contrasena con los caracteres randoms
  const hashedPassword = await bcryptjs.hash(password, salt)
  //Creacion del usuario en base de datos con la contrasena encriptada
  const newUser = await User.create({
    username,
    email,
    passwordHash: hashedPassword
  })

  console.log(newUser)

  //Regresa a la pagina de inicio
  res.redirect('/')
}
