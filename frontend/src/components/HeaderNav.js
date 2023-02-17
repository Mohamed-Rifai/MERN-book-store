import React, { useEffect } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'font-awesome/css/font-awesome.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/User'

const Container = styled.div`
         height: 60px;
        position:fixed;
        width: 100%;
        z-index: 1;
        background-color: aliceblue;
       
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
  
  const [searchQuery, setSearchQuery] = useState('');
  const {cartList} = useSelector((state)=> state.cart)
   const { name, isLoggedIn } = useSelector(state => state.user);
  const navigate = useNavigate()
    const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);

  }

  const handleLogout = () => {
     dispatch(logout());
    localStorage.removeItem('userToken');
     
     navigate('/')
  };




  
  return (
    <Container>
    <Wrapper>
      <Left>
        <Language>eng</Language>
      <SearchContainer>
        <Input value={searchQuery} onChange={handleInputChange} placeholder="Search for books"/>

       <FontAwesomeIcon icon={faSearch} style={{color:"gray",fontSize:16}}/>
     

      </SearchContainer>
      </Left>
      <Center><Logo>BOOKWORM</Logo></Center>
      <Right>
   
   {isLoggedIn ?<MenuItem>{name}</MenuItem>: <MenuItem>REGISTER</MenuItem>  }
   {isLoggedIn ? (
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          ) : (
            <MenuItem onClick={()=> navigate('/login')}>Login</MenuItem>
          )}
   <MenuItem>
    <BadgeWrapper>
   <FontAwesomeIcon icon={faShoppingCart}  onClick={()=> navigate('/')}/>
   {cartList.length > 0 ? <Count>{cartList.length}</Count> : null} 
   </BadgeWrapper>
   </MenuItem>

      </Right>
      </Wrapper>  
    </Container>
  )
}


export default HeaderNav
