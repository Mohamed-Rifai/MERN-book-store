import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import {  decrement, increment } from "../../redux/Cart"


 const CartButton = styled.div`
      display: flex;
    margin-left: 3rem;
 `
const Buttons = styled.button`
     margin: 1rem;
     
     
`
const CountNum = styled.span`
        margin-top: 1rem;
`

const AfterCart = ({cartCount,productID }) => {
    
     
     const dispatch = useDispatch()

  return (
    <CartButton>
      <Buttons onClick={() => dispatch(decrement(productID))}>-</Buttons>
      <CountNum>{cartCount}</CountNum>
      <Buttons onClick={() => dispatch(increment(productID))}>+</Buttons>
    </CartButton>
  )
}

export default AfterCart
