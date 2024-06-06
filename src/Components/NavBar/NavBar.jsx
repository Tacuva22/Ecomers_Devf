// src/components/NavBar.jsx
import React, { useState } from 'react';
import './NavBar.css';

const NavBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">E-Commerce</a>
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/products">Productos</a>
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </nav>
  );
};

export default NavBar;
