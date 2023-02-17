const Cart = require('../model/cartSchema')


 const addToCart = (req,res) => {
       console.log(req.body);
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
    console.log('Cart saved successfully: ', );

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




// Increases the quantity of a product in the user's cart
const increaseProductQuantity = (req, res) => {
  const productId = req.params.id;
  
  // Log the product ID to aid in debugging
  console.log(`Product ID: ${productId}`);
        
  // Update the user's cart to increase the quantity of the specified product
  Cart.updateMany(
    { "product.productId": productId },
    { $inc: { "product.$.quantity": 1 } },
    (error, updatedCart) => {
      if (error) {
        // Log the error and send a 500 error response to the frontend
        console.error(`Error updating cart: ${error}`);
        res.status(500).json({
          success: false,
          message: "Error updating cart"
        });
      } else {
        // Log the updated cart and send a success response to the frontend
        console.log(`Cart updated successfully: ${updatedCart}`);
        res.json({
          success: true,
          message: "Product quantity increased successfully"
        });
      }
    }
  );
};




const deleteProduct = (req, res) => {
    //when order created then it's working for delete that product in cart
  const productId = req.params.id;

  Cart.deleteMany({ "product.productId": productId }, (error, result) => {
    if (error) {
      console.log("Error deleting product: ", error);
      res.status(500).json({
        success: false,
        message: "Error deleting product"
      });
    } else {
      console.log("Product deleted successfully: ", result);
      res.json({
        success: true,
        message: "Product deleted successfully"
      });
    }
  });
};






module.exports = {addToCart,decreaseProductQuantity,increaseProductQuantity,deleteProduct}








