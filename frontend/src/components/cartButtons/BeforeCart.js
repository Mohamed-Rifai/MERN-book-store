import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import axios from "../../axios"
import { addToCart } from "../../redux/Cart"

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: gray;
    color: white;
    cursor: pointer;
    font-weight: 600;
   border-radius: 100px;
    text-align: center;
    width: 75%;
    margin: 1rem;
`

const BeforeCart = ({product}) => {

 const dispatch = useDispatch()
 
const { userId } = useSelector((state) => state.user);
  
 const handleClick = () => {
  dispatch(addToCart(product))
  
    axios.post('/cart', { product,userId })
         .then((response) => {
           console.log('Product ID sent to backend:', response.data);
         })
         .catch((error) => {
           console.log('Error sending product ID to backend:', error);
         });


   
};
   


  return (
    <>
       <Button onClick={ handleClick }>Add to cart</Button>
    </>
  )
}

export default BeforeCart
