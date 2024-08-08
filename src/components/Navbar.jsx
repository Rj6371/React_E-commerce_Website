import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { items } from './Data';
import { FaCartArrowDown } from "react-icons/fa";

export default function Navbar({ setData, cart }) {

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();


  // Filtering condition....

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
  }

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element)
  }

  // Handle Input Search....

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  }

  return (
    <>
      <header className='sticky-top'>
        <div className='nav-bar'>
          <NavLink to='/' className="brand">E-cart</NavLink>

          <form onSubmit={handleSubmit} className="search-bar">
            <input
              type="text"
              placeholder='Serach-Products'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>

          <NavLink to="/cart" className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <FaCartArrowDown style={{ fontSize: '1.4rem' }} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </NavLink>
        </div>

        {
          location.pathname == '/' && (

            <div className="nav-bar-wrapper">
              <div className="items">Filter by {"->"}</div>
              <div
                onClick={() => setData(items)}
                className="items">No Filter</div>
              <div
                onClick={() => filterByCategory("mobiles")}
                className="items">Mobiles
              </div>
              <div
                onClick={() => filterByCategory("laptops")}
                className="items">Laptops
              </div>
              <div
                onClick={() => filterByCategory("tablets")}
                className="items">Tablets
              </div>
              <div
                onClick={() => filterByPrice("29999")}
                className="items">{">="}29999
              </div>
              <div
                onClick={() => filterByPrice("49999")}
                className="items">{">="}49999
              </div>
              <div
                onClick={() => filterByPrice("69999")}
                className="items">{">="}69999
              </div>
              <div
                onClick={() => filterByPrice("89999")}
                className="items">{">="}89999
              </div>
            </div>
          )
        }

      </header>
    </>
  )
}
