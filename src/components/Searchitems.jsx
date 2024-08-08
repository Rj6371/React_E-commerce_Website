import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Products from './Products';

export default function Searchitems({ cart, setCart }) {

  const { term } = useParams();
  const [filterdData, setFilterdData] = useState([]);

  // Filtering Data..........

  useEffect(() => {
    const filterdData = () => {
      const data = items.filter((p) => p.title.toLowerCase().includes(term.toLowerCase()));
      setFilterdData(data);
    }
    filterdData()
  }, [term]);

  return (
    <Products items={filterdData} cart={cart} setCart={setCart} />
  )
}
