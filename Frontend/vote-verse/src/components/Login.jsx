import loginImg from "../assets/vote1.jpeg";
import loginIcon from "../assets/login.png";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import { Navigate, Link } from "react-router-dom";

const Login = () => {
    const [regNo, setRegNo] = useState("");
    const [password, setPassword] = useState("");

    const [loggedIn, setLoggedIn] = useState(false);

    function onLoginBtnClick() {
        const formData = new FormData();
        formData.append("regNo", regNo);
        formData.append("password", password);

        axios.post(`http://127.0.0.1:8000/api/login`, formData)
            .then((response) => {
                // console.log(response);
                if (response.data.success === true) {
                    setLoggedIn(true);
                }
                const cookies = new Cookies();
                cookies.set('voterData', response.data.voters, { path: '/' });
                // console.log(cookies.get('voterData'));
            })
            .catch(err => {
                alert(err);
            })
    }


    return (
        <>
            <div className="loginpageContainer">
                <Navbar />
                <div className='loginPageSection'>
                    <div className="loginPageImage">
                        <img src={loginImg} alt="loginImage" />
                    </div>
                    <div className="loginDiv">
                        <img className="loginIcon" src={loginIcon} alt="icon" />
                        <h1>Login To Vote!</h1>

                        <input className="regNo" onChange={(e) => setRegNo(e.target.value)} type="text" placeholder="Registration Number" />
                        <input className="password" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />

                        <div className="LoginBtnDiv">
                            <button onClick={onLoginBtnClick} className="LoginBtn">Login</button>
                        </div>
                    </div>
                </div>
                <Link></Link>
                <div className="adminLoginLinkDiv">
                    <Link to="/admin/login" className="adminLoginLink"><p>Admin Login!</p></Link>
                </div>
            </div>
            {loggedIn && <Navigate to="/vote" replace />}
        </>
    )
}

export default Login