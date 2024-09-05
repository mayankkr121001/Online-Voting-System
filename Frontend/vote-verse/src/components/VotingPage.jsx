import React, { useState, useEffect } from 'react'
import Cookies from 'universal-cookie';
import axios from "axios";
import { Navigate } from "react-router-dom";
import Navbar from './Navbar'


import logoutIcon from "../assets/shutdown.png"

const VotingPage = () => {
    const [image, setImage] = useState();
    const [name, setName] = useState("");
    const [regNo, setRegNo] = useState("");
    const [semester, setSemester] = useState("");

    const [candidate, setCandidate] = useState([]);
    const [position, setPosition] = useState("");

    const [loggedOut, setLoggedOut] = useState(false);
    const [voted, setVoted] = useState(false);

    useEffect(() => {
        const cookies = new Cookies();
        // console.log(cookies.get('voterData').image);
        setImage(cookies.get('voterData').image.replace(cookies.get('voterData').image.slice(21, 28), ""));
        setName(cookies.get('voterData').name);
        setRegNo(cookies.get('voterData').regNo);
        setSemester(cookies.get('voterData').semester);

        axios.get(`http://127.0.0.1:8000/api/candidates`)
            .then(res => {
                // console.log(res.data.voters);
                setCandidate(res.data.candidates);
            })
            .catch(err => console.log(err));

        axios.get(`http://127.0.0.1:8000/api/votingStatus/${cookies.get('voterData').regNo}/check`)
            .then(res => {
                // console.log(res);
                if (res.data.success == true) {
                    setVoted(true);
                }
            })
            .catch(err => console.log(err))

        axios.get(`http://127.0.0.1:8000/api/scheduler`)
            .then(res => {
                // console.log(res);
                setPosition(res.data.schedule[0].position);
            })
            .catch(err => {
                console.log(err.response.data.message);
            })

    }, [])
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
    function onVoteBtnClickFunc(id) {
        // console.log(id);
        const clickedCandidate = candidate.filter((item) => item.id == id);
        // console.log(clickedCandidate);

        const cookies = new Cookies();
        // console.log(cookies.get('voterData'));

        axios.post(`http://127.0.0.1:8000/api/votingStatus`, {
            'voterName': cookies.get('voterData').name,
            'voterRegNo': cookies.get('voterData').regNo,
            'candidateName': clickedCandidate[0].name,
            'symbol': clickedCandidate[0].symbol
        })
            .then(res => {
                // console.log(res);
            })
            .catch(err => {
                console.log(err);
            })

        setVoted(true);
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
                            <img src={logoutIcon} alt="logout" />
                            <p onClick={onLogoutFunc} >Logout</p>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div className="votingSection">
                        <h1>Running For {position}</h1>
                        {/* <div className="timer">00:00:00</div> */}
                        <div className="userCandidatesSection">
                            {candidate.map((item, index) => (
                                <div className="candidateBox">
                                    <div className='candidateDetails'>
                                        <img src={item.image.replace(item.image.slice(21, 28), "")} alt="candidate" />
                                        <h2>{item.name}</h2>
                                    </div>
                                    <div className='candidateSymbolBtnDiv'>
                                        <img src={item.symbol.replace(item.image.slice(21, 28), "")} alt="symbol" />
                                        {voted ? <button disabled={true} onClick={() => onVoteBtnClickFunc(item.id)} className="voteBtn">Voted</button> :
                                            <button onClick={() => onVoteBtnClickFunc(item.id)} className="voteBtn">Vote</button>}
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>

                </div>
            </div>
            {loggedOut && <Navigate to="/login" replace />}
            {voted && <Navigate to="/thanks" replace />}
        </>
    )
}

export default VotingPage