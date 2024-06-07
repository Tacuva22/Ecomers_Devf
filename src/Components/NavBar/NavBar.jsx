// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useCart } from '../../context/CartContext';

const NavBar = ({ user, onLogout }) => {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">E-Commerce</a>
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/products">Productos</a>
        {user ? (
          <>
            {user.userType === 'ADMIN' && <a href="/create-product">Admin</a>}
            <a href="/profile">Perfil</a>
            <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>
          </>
        )}
        <Link to="/cart">Cart ({totalItems})</Link>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Buscar productos..." />
      </div>
    </nav>
  );
};

export default NavBar;
