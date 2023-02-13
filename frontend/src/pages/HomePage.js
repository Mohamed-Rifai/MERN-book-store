import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import HeaderNav from '../components/HeaderNav'
import Products from '../components/Products'
import Slider from '../components/Slider'

const HomePage = () => {
  return (
    <div>
      <Announcement/>
      <HeaderNav/>
      <Slider/>
      <Categories/>
      <Products/>
    </div>
  )
}

export default HomePage
