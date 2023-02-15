

const BookStore = require('../model/bookSchema');

// Retrieves all products from the BookStore collection and sends them as a JSON response to the frontend
const getBooks = async (req, res) => {
  try {
    // Use the BookStore model to find all products in the collection
    const products = await BookStore.find();

    // Send the products as a JSON response to the frontend
    res.json(products);
  } catch (error) {
    // If an error occurs, log it and send a 500 error response to the frontend
    console.error(`Error in getBooks: ${error}`);
    res.status(500).json({ error: 'Server error' });
  }
};

// Export the getBooks function for use in other modules
module.exports = { getBooks };
