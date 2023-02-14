const axios = require('axios');
const BookStore = require('../model/bookSchema')




const getProducts = (req,res)=>{
   
   
    axios.get('https://www.googleapis.com/books/v1/volumes', {
  params: {
    q: '*',
    key: process.env.BOOKS_API_KEY,
    maxResults: 20
  } 
})
.then(response => {
  const books = response.data.items;

   books.forEach(book => {
   console.log('for each working');

    const bookData = {
      title: book.volumeInfo.title,
      cover_photo: book.volumeInfo.imageLinks?.thumbnail,
      category: "science",
      price: book.volumeInfo.pageCount
    };
    const newBook = new BookStore(bookData);
    newBook.save((err) => {
      if (err) {
        console.log(err);
        
      }
    });
  });
 
 res.status(200).json({message:'success'})

 
})
.catch(error => {
  
  console.log(error,"******** this error");
  res.json({message:'catch working'})
});

   
}


module.exports = {getProducts}