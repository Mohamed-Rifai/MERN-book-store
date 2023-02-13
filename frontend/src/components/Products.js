import { useState } from "react"
import styled from "styled-components"
import {popularProducts} from '../data'
import AfterCart  from './Buttons/AfterCart'
import BeforeCart  from './Buttons/BeforeCart'
import { useSelector } from "react-redux"


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

 const {cartCount} = useSelector((state)=> state.cart)
 


 
 
    
  return (
    <>
   <Header>ALL PRODUCTS</Header>
    <Container>
       
      {popularProducts.map(item=>(
         <Card>
         <Image src={item.img}/>

    {cartCount > 0 ? <AfterCart/> :<BeforeCart />}
          
         
          </Card>
         
      ))}
    </Container>
    </>
  )
}

export default Products
