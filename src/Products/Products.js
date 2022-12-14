import React from 'react';
import Medicine from '../components/Cards/Medicine';
import Category from '../components/Categories/Category';
import Header from '../components/Navbar/Header';
import './products.css'



const Products = () => {
  return (
    <>
    <Header />
    
      <div className="product_container">
        <div className="right_product">
          <Category />
        </div>
        <div className="left_product">
          <Medicine />
          
        </div>
      </div>
    </>
  )
}

export default Products