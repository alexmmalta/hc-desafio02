import React, { useState, useEffect } from 'react';

import { Container } from './style';

import api from '../../services/api';

interface IProduct {
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);


  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])

  useEffect(() => {
    localStorage.setItem(`@cart`, JSON.stringify(cart));
  }, [cart]);


  const handleCart = ( index: number ) => {
    let product = data[index]
    setCart(cart => [...cart,product]);
  }

  return (
    <Container>
      <header>
        <div>
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Dunder_Mifflin%2C_Inc.svg" alt="logo" />
        </div>
        <div className="cart">
          <img src="https://image.flaticon.com/icons/png/512/1170/1170678.png" alt="cart" width="32" height="32" />
          <span> ({cart.length}) Itens </span>
        </div>
      </header>
      <section>
        {data.map((prod, index) => (
          <div className="product-container" key={prod.id}>
            <img src={prod.photo} alt="resma de papel" />
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h6>{prod.price}</h6>
            <button onClick={() => handleCart(index)}> Adicionar ao carrinho</button>
          </div>
        ))}
      </section>

    </ Container>
  );
}

export default Home;
