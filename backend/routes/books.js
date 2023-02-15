const express = require('express')
const prodcutControler = require('../controller/booksController')

const router = express()

router.get('/',prodcutControler.getBooks)

module.exports = router