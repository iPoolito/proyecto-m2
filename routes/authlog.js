const router = require('express').Router()

const authController = require('./../controllers/authController')

//Nos lleva al controller de auth)

//LOGIN
//http://localhost:3000/login
router.get('/', authController.logIn)
router.post('/', authController.logInForm)

module.exports = router
