import React from 'react'
import navLogo from "../assets/fingerprint.png"
import landingImg from "../assets/landing.jpg"

const LandingPage = () => {
    return (
        <>
            <div className='navBar'>
                <div className="logo">
                    <img src={navLogo} alt="logo" id='logoImg' />
                </div>

            </div>
            <div className='section'>
                <div className="info">
                    <h1>Online Voting</h1>
                    <p className='infoPara'>Welcome to VoteVerse online voting platform, where your voice shapes our community. Our user-friendly interface makes voting easy and accessible to all students. Exercise your right to vote for student council, class representatives, and important campus decisions. Join us in making a difference and shaping the future of our college/school together.</p>
                    <div className='lineDesign'>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </div>
                    <div className="clickToLoginDiv">
                        <button className="clickToLoginBtn">Click To Login</button>
                    </div>
                </div>
                <div className="landingImage">
                    <img src={landingImg} alt="show" />
                </div>
            </div>
        </>
    )
}

export default LandingPage