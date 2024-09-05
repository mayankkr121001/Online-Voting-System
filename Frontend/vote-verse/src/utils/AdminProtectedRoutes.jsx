import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from 'react-router-dom';
import Cookies from 'universal-cookie';


function AdminProtectedRoutes() {
    const navigate = useNavigate();
    const cookies = new Cookies();

    useEffect(() => {
        if (!cookies.get('adminData')) {
            navigate("/admin/login");  // Navigate to home if 'voter-data' cookie is not present
        }
    }, [navigate, cookies]);
    

    return (
        cookies?.get('adminData') ? <Outlet /> : null
    )



}

export default AdminProtectedRoutes;