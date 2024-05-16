import React, { useState, useEffect } from 'react'
import Cookies from 'universal-cookie';
import axios from "axios";
import { Navigate } from "react-router-dom";
import Navbar from './Navbar'
import man1 from "../assets/man1.png";
import man2 from "../assets/man2.png";
import man3 from "../assets/man3.png"
import login from "../assets/login.png"
import earphone from "../assets/earphone.png"
// import om from "../assets/om.png"

import logoutIcon from "../assets/shutdown.png"

const VotingPage = () => {
    const [image, setImage] = useState();
    const [name , setName] = useState("");
    const [regNo , setRegNo] = useState("");
    const [semester , setSemester] = useState("");

    const [loggedOut, setLoggedOut] = useState(false);

    useEffect(() =>{
        const cookies = new Cookies();
        // console.log(cookies.get('voterData').image);
        setImage(cookies.get('voterData').image.replace(cookies.get('voterData').image.slice(21, 28), ""));
        setName(cookies.get('voterData').name);
        setRegNo(cookies.get('voterData').regNo);
        setSemester(cookies.get('voterData').semester);

    }, [])
    function onLogoutFunc(){
        axios.post(`http://127.0.0.1:8000/api/logout`)
        .then(res =>{
            // console.log(res);
            if(res.data.success === true){
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
            <div className="votingPageContainer">
                <Navbar />
                <div className="profileVotingDiv">
                    <div className="profileSection">
                        <div className="profilePicDiv">
                            <img src={image} alt="profilePic" />
                        </div>
                        <p>Name: {name}</p>
                        <p>Reg. No.: {regNo}</p>
                        <p>Semester: {semester}</p>
                        <div className="lineAboveLogout"></div>
                        <div className="logoutDiv">
                            <img  src={logoutIcon} alt="logout" />
                            <p onClick={onLogoutFunc} >Logout</p>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div className="votingSection">
                        <h1>Running For President</h1>
                        <div className="timer">00:00:00</div>
                        <div className="userCandidatesSection">
                            <div className="candidateBox">
                                <div className='candidateDetails'>
                                    <img src={man2} alt="candidate" />
                                    <h2>Shivam Chandrawanshi</h2>
                                </div>
                                <div className='candidateSymbolBtnDiv'>
                                    <img src={earphone} alt="symbol" />
                                    <button className="voteBtn">Vote</button>
                                </div>
                            </div>
                            <div className="candidateBox">
                                <div className='candidateDetails'>
                                    <img src={man3} alt="candidate" />
                                    <h2>Avinandan Bhandari</h2>
                                </div>
                                <div className='candidateSymbolBtnDiv'>
                                    <img src={login} alt="symbol" />
                                    <button className="voteBtn">Vote</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            {loggedOut && <Navigate to="/login" replace />}
        </>
    )
}

export default VotingPage