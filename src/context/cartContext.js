import React, { useState } from "react";

export const CartContext = React.createContext([]);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);

  const calculateProductsAmount = () => {
    let currentProducts = 0;
    cart.map(product => {
      currentProducts += product.amount;
    })
    const totalAmount = currentProducts;
    return totalAmount
  }

  const calculateOrderPrice = () => {
    let currentPrice = 0;
    cart.map(product => {
      console.log('product.price', product);
      currentPrice += product.price * product.amount;
    })
    const totalOrderPrice = currentPrice;
    return totalOrderPrice;

  }

  return (
    <CartContext.Provider value={{ cart, setCart, amount, setAmount, price, setPrice, calculateProductsAmount, calculateOrderPrice }}>
      {props.children}
    </CartContext.Provider>
  )
}
