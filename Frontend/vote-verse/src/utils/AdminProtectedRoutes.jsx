import React, { useEffect } from "react";
import { useNavigate, Outlet } from 'react-router-dom';
import Cookies from 'universal-cookie';


function AdminProtectedRoutes() {
    const navigate = useNavigate();
    const cookies = new Cookies();

    useEffect(() => {
        if (!cookies.get('adminData')) {
            navigate("/admin/login");  
        }
    }, [cookies]);
    

    return (
        cookies?.get('adminData') ? <Outlet /> : null
    )



}

export default AdminProtectedRoutes;