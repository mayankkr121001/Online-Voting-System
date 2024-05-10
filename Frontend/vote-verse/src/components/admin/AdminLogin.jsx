import React from 'react'
import loginIcon from "../../assets/login.png";
import AdminNav from "./AdminNav"

const AdminLogin = () => {
    return (
        <>
            <div className='adminLoginContainer'>
                <AdminNav />
                <div className="adminLoginDiv">
                    <img className="loginIcon" src={loginIcon} alt="icon" />
                    <h1>Admin Login!</h1>

                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />

                    <div className="LoginBtnDiv">
                        <button className="LoginBtn">Login</button>
                    </div>

                </div>
            </div >
        </>
    )
}

export default AdminLogin