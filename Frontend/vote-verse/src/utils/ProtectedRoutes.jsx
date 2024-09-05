import React, { useEffect } from "react";
import { useNavigate, Outlet } from 'react-router-dom';
import Cookies from 'universal-cookie';


function ProtectedRoutes() {
    const navigate = useNavigate();
    const cookies = new Cookies();

    useEffect(() => {
        if (!cookies.get('voterData')) {
            navigate("/");  // Navigate to home if 'voter-data' cookie is not present
        }
    }, [cookies]);

    return (
        cookies?.get('voterData') ? <Outlet />  : null
    )
}

export default ProtectedRoutes;