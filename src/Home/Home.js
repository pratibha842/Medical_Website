import React from 'react'
import Header from '../components/Navbar/Header'
import './home.css'
import {  Outlet } from 'react-router-dom'
import Search from '../components/SearchBar/Search'
import Category from '../components/Categories/Category'
import Medicine from '../components/Cards/Medicine'

const Home = () => {
  return (
    <>
      <Header />
      <Search />
      <div className="product_container">
        <div className="right_product">
          <Category />
        </div>
        <div className="left_product">
          <Medicine />
          
        </div>
      </div>
      {/* <Outlet /> */}
    </>
    
  )
}

export default Home