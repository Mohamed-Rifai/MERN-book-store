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

const AfterCart = () => {
     const {cartCount} = useSelector((state)=> state.cart)
     
     const dispatch = useDispatch()

  return (
    <CartButton>
      <Buttons onClick={() => dispatch(decrement())}>-</Buttons>
      <CountNum>{cartCount}</CountNum>
      <Buttons onClick={() => dispatch(increment())}>+</Buttons>
    </CartButton>
  )
}

export default AfterCart
