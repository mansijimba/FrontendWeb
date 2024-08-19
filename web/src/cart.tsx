import React from 'react';
import './Cart.css';

const Cart: React.FC = () => {
  // Example cart items
  const cartItems = [
    { id: 1, name: 'Item 1', price: 20.0, quantity: 2 },
    { id: 2, name: 'Item 2', price: 15.0, quantity: 1 },
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <ul className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <div className="item-details">
                <span className="item-name">{item.name}</span>
                <span className="item-price">${item.price.toFixed(2)}</span>
                <span className="item-quantity">x{item.quantity}</span>
              </div>
              <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </ul>
      <div className="cart-summary">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
