import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'font-awesome/css/font-awesome.min.css';
import { useSelector } from 'react-redux';

const Container = styled.div`
         height: 60px;
  `
const Wrapper = styled.div`
         padding:10px 20px;
         display:flex;
         justify-content:space-between;
         align-items: center;
  `
const Left = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
`
const Language = styled.span`
      font-size: 14px;
      cursor: pointer;
`
const SearchContainer = styled.div`
      border: 0.5px solid lightgray;
      display: flex;
      align-items: center;
      margin-left: 25px;
      padding: 5px;
`
const Input = styled.input`
      border: none;
`
const BadgeWrapper = styled.span`
  position: relative;
  display: inline-block;

  
`


const Count = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 14px;
  height: 10px;
  text-align: center;
  font-size: 11px;
  font-weight: bold;
  padding-bottom: 18px;
`;

const Center = styled.div`
       flex: 1;
       text-align: center;
`
const Logo = styled.h2`
       font-weight: bold;
`
const Right = styled.div`
       flex: 1;
       display: flex;
       align-items: center;
       justify-content: flex-end;
`
const MenuItem = styled.div`
       font-size: 14px;
       cursor: pointer;
       margin-left: 25px;
`



const HeaderNav = () => {

  const {cartList} = useSelector((state)=> state.cart)
  console.log(cartList.length);

  return (
    <Container>
    <Wrapper>
      <Left>
        <Language>eng</Language>
      <SearchContainer>
        <Input/>

       <FontAwesomeIcon icon={faSearch} style={{color:"gray",fontSize:16}}/>
     

      </SearchContainer>
      </Left>
      <Center><Logo>MRead.</Logo></Center>
      <Right>

   <MenuItem>REGISTER</MenuItem>
   <MenuItem>SIGN IN</MenuItem>
   <MenuItem>
    <BadgeWrapper>
   <FontAwesomeIcon icon={faShoppingCart} />
    <Count>{cartList?.length}</Count> 
   </BadgeWrapper>
   </MenuItem>

      </Right>
      </Wrapper>  
    </Container>
  )
}

export default HeaderNav
