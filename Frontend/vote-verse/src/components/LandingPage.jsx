import Navbar from "./Navbar"
import landingImg from "../assets/landing.jpg"
import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <>
            <div className="landingContainer">
                <Navbar />
                <div className='landingSection'>
                    <div className="landingInfo">
                        <h1>Online Voting</h1>
                        <p className='landingInfoPara'>Welcome to VoteVerse online voting platform, where your voice shapes our community. Our user-friendly interface makes voting easy and accessible to all students. Exercise your right to vote for student council, class representatives, and important campus decisions. Join us in making a difference and shaping the future of our college/school together.</p>
                        <div className='lineDesign'>
                            <div className='line1'></div>
                            <div className='line2'></div>
                            <div className='line3'></div>
                        </div>
                        <div className="clickToLoginDiv">
                            <Link to="/login">
                                <button className="clickToLoginBtn">Click To Login</button>
                            </Link>
                        </div>
                    </div>
                    <div className="landingImage">
                        <img src={landingImg} alt="landingImage" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default LandingPage