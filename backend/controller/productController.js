const axios = require('axios');
const BookStore = require('../model/bookSchema')




const getProducts =async (req,res)=>{
   
     
  const products = await BookStore.find()
   
  res.json(products)
   
}


module.exports = {getProducts}