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

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleSignup = (user) => {
    setUser(user);
  };

  return (
    <div className="App">
      <NavBar />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;