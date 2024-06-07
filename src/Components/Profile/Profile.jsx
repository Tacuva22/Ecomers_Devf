// src/components/Profile.jsx
import React from 'react';

const Profile = ({ user }) => {
  if (!user) {
    return <p>No estás autenticado.</p>;
  }

  return (
    <div className="profile">
      <h2>Perfil de Usuario</h2>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Rol: {user.userType}</p>
    </div>
  );
};

export default Profile;
