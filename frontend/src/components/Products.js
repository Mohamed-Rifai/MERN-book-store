
import styled from "styled-components"
import {popularProducts} from '../data'
import AfterCart  from './cartButtons/AfterCart'
import BeforeCart  from './cartButtons/BeforeCart'
import { useSelector } from "react-redux"
import CartButtons from "./cartButtons"


const Container = styled.div`
      padding: 20px;
      display: flex;
      overflow-x: scroll;
      overflow-y: hidden;
     
`
const Header = styled.h3`
      margin: 1rem;
      font-family: 700;
`
const Card = styled.div`
      flex: 1;
      margin: 5px;
      min-width: 280px;
      height: 350px;
     
`
const Image = styled.img`
      height: 75%;
`

const Products = () => {

 const {cartList} = useSelector((state)=> state.cart)
 
console.log(cartList);
    
  return (
    <>
   <Header>ALL PRODUCTS</Header>
    <Container>
       
      {popularProducts.map(product=>(
         <Card>
         <Image src={product.img}/>
            <CartButtons product={product}/>       
          </Card>
         
      ))}
    </Container>
    </>
  )
}

export default Products
