// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../services/api';
import './ProductList.css';

const ProductList = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const filteredProducts = products.filter(product =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      {filteredProducts.map(product => (
        <div key={product._id} className="product-card">
          <img src={product.image} alt={product.product_name} />
          <h3>{product.product_name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <Link to={`/product/${product._id}`}>
            <button>Ver Detalles</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
