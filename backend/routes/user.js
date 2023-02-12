const express = require('express')
const userController = require('../controller/userController')
const router = express()


//user Routes
router.post('/signup',userController.SignuUser)
router.post('/login',userController.loginUser)


module.exports = router