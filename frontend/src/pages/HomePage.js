import React, { useEffect } from 'react'
import Categories from '../components/Categories'
import HeaderNav from '../components/HeaderNav'
import Products from '../components/Products'
import Slider from '../components/Slider'

const HomePage = () => {

    useEffect(()=> {
      
    })


  return (
    <div>
      <HeaderNav/>
      <Slider/>
      <Categories/>
      <Products/>
      
    </div>
  )
}

export default HomePage

