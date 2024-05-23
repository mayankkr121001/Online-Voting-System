import React, { useState } from 'react'
import Cookies from 'universal-cookie';
import { Navigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar"
import successGif from "../assets/success-unscreen.gif"

const ThankYouPage = () => {
    const [loggedOut, setLoggedOut] = useState(false);

    function onLogoutFunc() {
        axios.post(`http://127.0.0.1:8000/api/logout`)
            .then(res => {
                // console.log(res);
                if (res.data.success === true) {
                    setLoggedOut(true);
                    const cookies = new Cookies();
                    cookies.remove('voterData', { path: '/' })
                }
            })
            .catch(err => {
                alert(err);
            })
    }
    return (
        <>
            <div className='thankYouContainer'>
                <Navbar />
                <div className="thanksDiv">
                    <div className="thankyouImage">
                        <img src={successGif} alt="success..." />
                    </div>
                    <div className="thankyouTextDiv">
                        <h2 className="thankYouText">Thank You</h2>
                        <h2 className="votedText">You Have Voted Successfully !</h2>

                    </div>
                    <button onClick={onLogoutFunc} className="thanksLogoutBtn">Logout</button>
                </div>
            </div>
            {loggedOut && <Navigate to="/login" replace />}
        </>

    )
}

export default ThankYouPage