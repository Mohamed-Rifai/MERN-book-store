require('dotenv').config()
require('./config/connection')
const express = require('express')
const logger = require('morgan')
const userRoute = require('./routes/user')
const productRoute = require('./routes/books')
const cartRoute = require('./routes/cart')
const cors = require('cors')




const app = express()

//to connect backend & frontend
app.use(cors())

app.use(logger('dev'))

//body parsing
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))


//route middleware
app.use('/',userRoute)
app.use('/products',productRoute)
app.use('/cart',cartRoute)




const port = process.env.PORT 

//port listening
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});