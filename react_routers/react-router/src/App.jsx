import React from 'react';
const lazyAbout = React.lazy(() => import('./components/About'));

import {Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Product from './components/Product';
import FeaturedProduct from './components/FeaturedProduct';
import NewProduct from './components/NewProduct';
import Users from './components/Users';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='About' element={<lazyAbout />}></Route>
        <Route path='order' element={<OrderSummary />}></Route>
        <Route path='product' element={<Product />}>
          <Route index element={<FeaturedProduct/>}></Route>
          <Route path='featured' element={<FeaturedProduct />}></Route>
          <Route path='new' element={<NewProduct />}></Route>
        </Route>

        <Route path='users/:Id' element={<Users />}></Route>


        <Route path='*' element={<NoMatch />}></Route>
        
      </Routes>
    </>
    
  )
}

export default App;
