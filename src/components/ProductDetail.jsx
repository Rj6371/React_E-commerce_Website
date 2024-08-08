import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Products from './Products';

export default function ProductDetail({ cart, setCart }) {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [reletedProducts, setReletedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id)
    setProduct(filterProduct[0]);

    const reletedProduct = items.filter((p) => p.category === product.category);
    setReletedProducts(reletedProduct);
  }, [id, product.category])

  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id, price, title, description, imgSrc
    }
    setCart([...cart, obj])
  }

  return (
    <>
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className='text-center'>
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className='btn btn-primary mx-3'>{product.price}{" "}₹</button>
          <button onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)} className='btn btn-warning '>Add To Cart</button>
        </div>

      </div>
      <span className='span mt-5'><marquee behavior="alternate" direction="left to right" scrollamount="8">🎗 &nbsp; Releted Products &nbsp; 🎗</marquee></span>
      <Products items={reletedProducts} cart={cart} setCart={setCart} />
    </>
  )
}
