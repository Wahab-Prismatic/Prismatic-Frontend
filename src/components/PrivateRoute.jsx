import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // Check if user is authenticated (either in Redux state or localStorage)
  const token = useSelector((state) => state.login.token) || localStorage.getItem('token');

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;