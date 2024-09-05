import React, {useState, useEffect} from "react";
import { useNavigate, Outlet } from 'react-router-dom';
import Cookies from 'universal-cookie';


function ProtectedRoutes() {
    const navigate = useNavigate();
    const cookies = new Cookies();
    
    useEffect(() => {
        if (!cookies.get('voter-data')) {
            navigate("/");  // Navigate to home if 'voter-data' cookie is not present
        }
    }, [navigate, cookies]);

    return (
        cookies.get('voter-data') ? <Outlet /> : null
    )


}

export default ProtectedRoutes;