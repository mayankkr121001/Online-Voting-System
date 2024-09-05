import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import { Navigate, Link } from "react-router-dom";
import loginImg from "../assets/vote1.jpeg";
import loginIcon from "../assets/login.png";
import Navbar from "./Navbar";

const Login = () => {
    const [regNo, setRegNo] = useState("");
    const [password, setPassword] = useState("");

    const [loggedIn, setLoggedIn] = useState(false);

    const [countDownArray, setCountDownArray] = useState([]);
    const [voteEndsFlag, setVoteEndsFlag] = useState(false);

    const [resultFlag, setResultFlag] = useState(false);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/scheduler`)
            .then(res => {
                const tempArray = [];
                tempArray.push(res.data.schedule[0].date.slice(0, 4));
                tempArray.push((res.data.schedule[0].date.slice(5, 7)) - 1);
                tempArray.push(res.data.schedule[0].date.slice(8, 10));
                tempArray.push(res.data.schedule[0].startTime.slice(0, 2));
                tempArray.push(res.data.schedule[0].startTime.slice(3, 5));
                tempArray.push(res.data.schedule[0].endTime.slice(0, 2));
                tempArray.push(res.data.schedule[0].endTime.slice(3, 5));
                // console.log(tempArray);

                countdownFunc(tempArray);
            })
            .catch(err => {
                console.log(err.response.data.message);
            })

        const cookies = new Cookies();
        // console.log(cookies.get('resultData'));
        if (cookies.get('resultData')) {
            setResultFlag(true);
        } else {
            setResultFlag(false);
        }
    }, [])

    function countdownFunc(tempArray) {
        // console.log(countDownArray[1])
        let specificDate = new Date(tempArray[0], tempArray[1], tempArray[2], tempArray[3], tempArray[4]);

        const timeInterval = setInterval(() => {
            let dest = new Date(specificDate).getTime();
            let now = new Date().getTime();

            let diff = dest - now;
            let days = Math.floor(diff / (1000 * 60 * 60 * 24));

            let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((diff % (1000 * 60)) / (1000));

            const countTempArray = [];

            countTempArray.push(days);
            countTempArray.push(hours);
            countTempArray.push(minutes);
            countTempArray.push(seconds);

            setCountDownArray(countTempArray);

        }, 1000);

        if (new Date(specificDate).getTime() - new Date().getTime() < 0) {
            // console.log(new Date(specificDate).getTime() - new Date().getTime());
            let zeroArray = [0, 0, 0, 0];
            setCountDownArray(zeroArray);
            clearInterval(timeInterval);
        }

        if (new Date().getTime() - new Date(tempArray[0], tempArray[1], tempArray[2], tempArray[5], tempArray[6]).getTime() > 0) {
            setVoteEndsFlag(true);
        } else {
            setVoteEndsFlag(false);
        }

    }

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
                alert(err.response.data.message);
            })
    }


    return (
        <>
            <div className="loginpageContainer">
                <Navbar />
                <div className="countDownDiv">
                    {voteEndsFlag ? <h3>Voting has ended!!!</h3> : <h3>Voting will start in:  {countDownArray[0]} Days - {countDownArray[1]} Hours - {countDownArray[2]} Minutes - {countDownArray[3]} Seconds</h3>}
                </div>
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

                        {resultFlag && <div className="ResultBtnDiv">
                            <Link to="/result"><button className="ResultBtn">Result</button></Link>
                            </div>}
                    </div>
                </div>
                <div className="adminLoginLinkDiv">
                    <Link to="/admin/login" className="adminLoginLink"><p>Admin Login!</p></Link>
                </div>

            </div>
            {loggedIn && <Navigate to="/vote" replace />}
        </>
    )
}

export default Login