import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import {  decrement, increment } from "../../redux/Cart"
import axios from '../../axios'

 const CartButton = styled.div`
      /* display: flex; */
    margin-left: 3rem;
    
 `
const Buttons = styled.button`
     margin: 1rem;
     
     
`
const BtnOrder = styled.button`
     border: none;
    padding: 10px;
    background-color: #f5f;
    color: white;
    cursor: pointer;
    font-weight: 600;
   border-radius: 100px;
    text-align: center;
    width: 75%;
    margin: 0.5rem;
`
const CountNum = styled.span`
        margin-top: 1rem;
`

const AfterCart = ({cartCount,productID }) => {
    
     const navigate = useNavigate()
     const dispatch = useDispatch()
   const { isLoggedIn } = useSelector(state => state.user);



   const handleOrder = () => {
    // when order created, delete product in cart
     if(isLoggedIn){
      console.log('logged in');
     }else{
      console.log('not logged in');
     }
    

   }


     const handleDecrement = () => {
    dispatch(decrement(productID))
   
    //api call for decrement the product Quantity in db

     axios.put(`/cart/decr/${productID}`)
    .then(response => {
       console.log(response);
    })
    .catch(error => {
      console.log(error);
    });


  }
  

   const handleIncrement = () => {
    dispatch(increment(productID))

       //api call for decrement the product Quantity in db

        axios.put(`/cart/inc/${productID}`)
    .then(response => {
       console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
   }

  return (
    <CartButton>
      <BtnOrder onClick={handleOrder }>Order Now</BtnOrder>
      <Buttons onClick={handleDecrement}>-</Buttons>
      <CountNum>{cartCount}</CountNum>
      <Buttons onClick={handleIncrement}>+</Buttons>
    </CartButton>
  )
}

export default AfterCart
