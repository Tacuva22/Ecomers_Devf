// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ProductList from './Components/ProductList/ProductList';
import ProductDetail from './Components/ProductDetails/ProductDetail';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import Profile from './Components/Profile/Profile';
import CreateProduct from './Components/CreateProducts/CreateProduct';
import Cart from './Components/Cart/Cart';
import { CartProvider } from './context/CartContext';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = ({ user, token, userType }) => {
    setUser({ ...user, token, userType });
  };

  const handleSignup = ({ user, token, userType }) => {
    setUser({ ...user, token, userType });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <CartProvider>
        <NavBar user={user} onLogout={handleLogout} />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
            <Route path="/profile" element={<Profile user={user} />} />
            {user && user.userType === 'ADMIN' && (
              <Route path="/create-product" element={<CreateProduct user={user} />} />
            )}
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </div>
  );
};

export default App;