const express = require('express')
const prodcutControler = require('../controller/productController')

const router = express()

router.get('/',prodcutControler.getProducts)

module.exports = router