import { useDispatch } from "react-redux"
import styled from "styled-components"
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

const BeforeCart = () => {

 const dispatch = useDispatch()
 

  return (
    <>
       <Button onClick={ () => dispatch(addToCart())}>Add to cart</Button>
    </>
  )
}

export default BeforeCart