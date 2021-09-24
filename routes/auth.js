const router = require('express').Router()

const authController = require('./../controllers/authController')

//Nos lleva al controller de auth
router.get('/', authController.signIn)
router.post('/', authController.signInForm)

//LOGIN

module.exports = router
