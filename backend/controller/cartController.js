const Cart = require('../model/cartSchema')


 const addToCart = (req,res) => {
   
        const userId = req.body.userId ? req.body.userId : null;
         const productId = req.body.product._id

 try{

    
    const myCart = new Cart({
 
        userId: userId,
        product: [
            {
                productId:productId,
                quantity: 1
            }
        ]
});

// Save the cart instance to the database

myCart.save((error, savedCart) => {

  if (error) {
    console.log('Error saving cart: ', error);

       res.status(500).json({
          success: false,
          message: 'Error saving cart'
        });
  } else {
    console.log('Cart saved successfully: ', savedCart);

      res.json({
          success: true,
          data: savedCart
        });
  }
});

    

 }catch(err){
    console.log(err);
     res.status(500).json({
      success: false,
      message: 'Server error'
    });
    
 }
}




const decreaseProductQuantity = (req, res) => {
  const productId = req.params.id;

  Cart.updateMany(
    { "product.productId": productId },
    { $inc: { "product.$.quantity": -1 } },
    (error, updatedCart) => {
      if (error) {
        console.log("Error updating cart: ", error);
        res.status(500).json({
          success: false,
          message: "Error updating cart"
        });
      } else {
        console.log("Cart updated successfully: ", updatedCart);

        // Find the cart document where the product quantity is 0 or less
        Cart.findOne({ "product.productId": productId, 
        "product.quantity": { $lte: 0 } }, (error, cart) => {
          if (error) {
            console.log("Error finding cart: ", error);
            res.status(500).json({
              success: false,
              message: "Error finding cart"
            });
          } else if (cart) {
            // If cart document exists, remove it
            cart.deleteOne((error, result) => {
              if (error) {
                console.log("Error deleting cart: ", error);
                res.status(500).json({
                  success: false,
                  message: "Error deleting cart"
                });
              } else {
                console.log("Cart deleted successfully: ", result);
                res.json({
                  success: true,
                  message: "Product quantity decreased successfully and cart deleted"
                });
              }
            });
          } else {
            // If cart document doesn't exist, return success message
            res.json({
              success: true,
              message: "Product quantity decreased successfully"
            });
          }
        });
      }
    }
  );
};


const increaseProductQuantity = (req, res) => {
  const productId = req.params.id
    console.log(productId); 
        
  Cart.updateMany(
    { "product.productId": productId },
    { $inc: { "product.$.quantity": 1 } },
    (error, updatedCart) => {
      if (error) {
        console.log("Error updating cart: ", error);
        res.status(500).json({
          success: false,
          message: "Error updating cart"
        });
      } else {
        console.log("Cart updated successfully: ", updatedCart);
        res.json({
          success: true,
          message: "Product quantity increased successfully"
        });
      }
    }
  );
};






module.exports = {addToCart,decreaseProductQuantity,increaseProductQuantity}








