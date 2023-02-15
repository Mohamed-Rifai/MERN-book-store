const express = require('express')
const cartController = require('../controller/cartController')
const router = express()


router.post('/',cartController.addToCart)
router.put('/decr/:id',cartController.decreaseProductQuantity)
router.put('/inc/:id',cartController.increaseProductQuantity)


module.exports = router
