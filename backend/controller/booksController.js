const axios = require('axios');
const BookStore = require('../model/bookSchema')



//find products in Bookstore collection & pass to frontend

const getBooks =async (req,res)=>{
   
     
  const products = await BookStore.find()
   
  res.json(products)
   
}


module.exports = {getBooks}