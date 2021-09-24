const router = require('express').Router()

const authController = require('./../controllers/authController')

//Nos lleva al controller de auth
//http://localhost:3000/signin
router.get('/', authController.signIn)
router.post('/', authController.signInForm)

module.exports = router
