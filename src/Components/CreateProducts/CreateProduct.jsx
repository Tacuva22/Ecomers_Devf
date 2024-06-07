// src/components/CreateProduct.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../../services/api';
import './CreateProduct.css';

const CreateProduct = ({ user }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  if (!user || user.userType !== 'ADMIN') {
    return <p>Access denied. Only administrators can create products.</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct({ name, description, price, image });
      navigate('/');
    } catch (err) {
      setError('Error creating product. Please try again.');
    }
  };

  return (
    <div className="create-product-container">
      <h2>Create New Product</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Product Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
