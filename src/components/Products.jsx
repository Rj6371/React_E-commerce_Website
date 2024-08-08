import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Products({ items, cart, setCart }) {

  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id, price, title, description, imgSrc
    }
    setCart([...cart, obj])
  }

  return (
    <>
      <div className="container my-5" >
        <div className="row center">
          {items.map((product) => {
            return (
              <div key={product.id} className="col-lg-4 col-md-6 my-3 text-center flex" >
                <div className="card" style={{ width: '18rem' }}>
                  <NavLink to={`/products/${product.id}`} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <img
                      src={product.imgSrc}
                      className="card-img-top"
                      alt="..."
                    />
                  </NavLink>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <button className='btn btn-primary'>{product.price}{" "}₹</button>
                    <button
                      onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
                      className='btn btn-warning mx-3'>Add To Cart</button>
                  </div>
                </div >
              </div >
            )
          })
          }
        </div>
      </div >
    </>
  )
}
