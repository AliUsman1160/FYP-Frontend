import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateCompnent() {
    const auth = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    return (auth && token) ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateCompnent;
