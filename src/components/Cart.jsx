import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart({ cart, setCart }) {

  const removeCartItem = (id) => {
    const filterCartItem = cart.filter((product) => {
      return product.id !== id;
    })
    setCart(filterCartItem)
  }

  return (
    <>
      <div className="container my-5" style={{ width: '36%' }}>
        {
          cart.length === 0 ? (
            <>
              <div className="text-center">
                <h1 style={{ color: 'blue', fontWeigth: 'bold' }}>Your Cart is Empety</h1>
                <Link to='/'><button className='btn btn-warning my-5 fw-bold text-black-50'>Go To Shopping...</button></Link>
              </div>
            </>
          ) :
            cart.map((product) => {
              return (
                <div key={product.id} className="card mb-3 text-center my-5" style={{ "maxWidth": "33.75rem" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={product.imgSrc} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <button className='btn btn-primary mx-3 fw-bold'>{product.price}{" "}₹</button>
                        <button onClick={() => removeCartItem(product.id)}
                          className='btn btn-danger fw-bold '>Remove</button>
                      </div>
                    </div>
                  </div>
                </div >

              )
            })
        }
      </div>
      {
        cart.length != 0 && (
          <div className="container text-center my-5 flex">
            <button className='btn btn-primary fw-bold mx-5'>CheckOut</button>
            <button onClick={() => setCart('')} className='btn btn-danger fw-bold'>Clear Cart</button>
          </div>
        )
      }

    </>
  )
}
