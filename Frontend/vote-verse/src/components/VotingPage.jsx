import React from 'react'
import Navbar from './Navbar'
import man1 from "../assets/man1.png";
import man2 from "../assets/man2.png";
import man3 from "../assets/man3.png"
import logoutIcon from "../assets/shutdown.png"

const VotingPage = () => {
    return (
        <>
            <div className="votingPageContainer">
                <Navbar />
                <div className="profileVotingDiv">
                    <div className="profileSection">
                        <div className="profilePicDiv">
                            <img src={man1} alt="profilePic" />
                        </div>
                        <p>Name: Mayank Kumar</p>
                        <p>Roll: 220360955196</p>
                        <div className="lineAboveLogout"></div>
                        <div className="logoutDiv">
                            <img src={logoutIcon} alt="logout" />
                            <p>Logout</p>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    <div className="votingSection">
                        <h1>Running For President</h1>
                        <div className="timer">00:00:00</div>
                        <div className="userCandidatesSection">
                            <div className="candidateBox">
                                <div className='CandidateDetails'>
                                    <img src={man2} alt="candidate" />
                                    <h2>Shivam Chandrawanshi</h2>
                                </div>
                                <button className="voteBtn">Vote</button>
                            </div>
                            <div className="candidateBox">
                                <div className='CandidateDetails'>
                                    <img src={man3} alt="candidate" />
                                    <h2>Avinandan Bhandari</h2>
                                </div>
                                <button className="voteBtn">Vote</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default VotingPage