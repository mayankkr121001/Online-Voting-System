import React, { useState } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Navigate } from "react-router-dom";
import loginIcon from "../../assets/login.png";
import AdminNav from "./AdminNav"

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [adminLoggedIn, setAdminLoggedIn] = useState(false);

    function onLoginBtnClick(){
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        axios.post(`http://127.0.0.1:8000/api/adminLogin`, formData)
        .then((response) => {
            // console.log(response);
            if (response.data.success === true) {
                setAdminLoggedIn(true);
            }
            const cookies = new Cookies();
            cookies.set('adminData', response.data.admin, { path: '/' });
            // console.log(cookies.get('voterData'));
        })
        .catch(err => {
            alert(err);
        })
    }

    return (
        <>
            <div className='adminLoginContainer'>
                <AdminNav />
                <div className="adminLoginDiv">
                    <img className="loginIcon" src={loginIcon} alt="icon" />
                    <h1>Admin Login!</h1>

                    <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
                    <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />

                    <div onClick={onLoginBtnClick} className="LoginBtnDiv">
                        <button className="LoginBtn">Login</button>
                    </div>

                </div>
            </div >
            {adminLoggedIn && <Navigate to="/admin/dashboard" replace />}
        </>
    )
}

export default AdminLogin