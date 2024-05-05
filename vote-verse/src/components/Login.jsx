import loginImg from "../assets/vote1.jpeg";
import loginIcon from "../assets/login.png";
import Navbar from "./Navbar";

const Login = () => {
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

                        <input className="uniRoll" type="text" placeholder="University Roll Number" />
                        <input className="uniRoll" type="password" placeholder="Password" />
                        
                        <div className="LoginBtnDiv">
                            <button className="LoginBtn">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login