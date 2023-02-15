const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    type:String,
    default:null
  },
  product: [
    {
        productId:{
            type:String,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        }
    }
  ],
});
const Cart = mongoose.model('Cart',cartSchema) 

module.exports = Cart;

