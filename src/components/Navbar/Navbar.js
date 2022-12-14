import React from 'react';
import './navbar.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from '../../Products/Products';
import Distributors from '../../Distributors/Distributors';
import About from '../../About/About';
import Blog from '../../Blog/Blog';
import Home from '../../Home/Home'
import Error from '../../Error';

const Navbar = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }/>
          <Route path="products" element={ <Products /> }/>
          <Route path="distributors" element={ <Distributors /> }/>
          <Route path="about" element={ <About /> }/>
          <Route path="blog" element={ <Blog /> }/>
          <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navbar