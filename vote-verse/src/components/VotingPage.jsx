import React from 'react'
import Navbar from './Navbar'
import man2 from "../assets/man2.png";
import man3 from "../assets/man3.png"

const VotingPage = () => {
    return (
        <>
            <div className="votingPageContainer">
                <Navbar />
                <div className="votingSection">
                    <h1>Running For President</h1>
                    <div className="candidatesSection">
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
        </>
    )
}

export default VotingPage