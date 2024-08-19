import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './shop.css'; // Import your CSS file
import baby3 from './assets/baby3.png';

const Shop: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <section className="shop-section">
      <div className="image-text-container">
        <img src={baby3} alt="Our Identity" className="shop-image" />
        <div className="text-content">
          <h2 className="subtitle">EVERY BODY'S</h2>
          <h1 className="main-title">Exfoliate, Cleanse, Balance</h1>
          <p className="description">
            A combination of natural clays and nutrient-rich ingredients that cleanse and rebalance the skin.
          </p>
        </div>
      </div>

      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            {product.imageUrl && (
              <img src={product.imageUrl} alt={product.name} className="product-image" />
            )}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
          </div>
          
          
        ))}
      </div>
    </section>
  );
};

export default Shop;
