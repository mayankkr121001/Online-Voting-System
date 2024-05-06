import Navbar from "./Navbar"
import successGif from "../assets/success-unscreen.gif"
const ThankYouPage = () => {
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
                </div>
            </div>
        </>

    )
}

export default ThankYouPage