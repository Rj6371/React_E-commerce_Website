import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Products from './components/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Searchitems from './components/Searchitems';
import Cart from './components/Cart';
import { items } from './components/Data';

export default function App() {

  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route path='/' element={<Products cart={cart} setCart={setCart} items={data} />} />
          <Route path='/products/:id' element={<ProductDetail cart={cart} setCart={setCart} />} />
          <Route path='/search/:term' element={<Searchitems cart={cart} setCart={setCart} />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
