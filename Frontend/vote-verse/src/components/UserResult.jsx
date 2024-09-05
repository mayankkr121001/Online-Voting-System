import { useState, useEffect } from "react";
import Navbar from "./Navbar"
import axios from "axios";
import Cookies from 'universal-cookie';


const UserResult = () => {
    const [result, setResult] = useState([]);
    const [winner, setWinner] = useState({});

    const [resultFlag, setResultFlag] = useState(false);

    useEffect(() => {
        const cookies = new Cookies();
        // console.log(cookies.get('resultData'));
        if (cookies.get('resultData')) {
            setResult(cookies.get('resultData'));
            setResultFlag(true);
        } else {
            setResultFlag(false);
        }

        axios.get(`http://127.0.0.1:8000/api/getWinner`)
            .then(res => {
                // console.log(res.data.candidate);    
                setWinner(res.data.candidate)

            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <div className="userResultContainer">
                <Navbar />
                <div className='userResultSection'>
                    <div className="resultInLoginList">
                        <h1>Result</h1>
                        <table border="1">
                            <tbody>
                                <tr>
                                    <th>S No</th>
                                    <th>Candidate Name</th>
                                    <th>Reg. No.</th>
                                    <th>Semester</th>
                                    <th>Symbol</th>
                                    <th>Votes</th>
                                </tr>

                                {result.map((item, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.candidateName}</td>
                                        <td>{item.regNo}</td>
                                        <td>{item.semester}</td>
                                        <td><img className="voterImage" src={item.symbol.replace(item.symbol.slice(21, 28), "")} alt="" /></td>
                                        <td>{item.votes}</td>
                                    </tr>

                                ))}

                            </tbody>
                        </table>
                    </div>
                    {resultFlag && <div className="UserResultWinnerdiv">
                        <h2>Winner</h2>
                        <p>Candidate Name: <strong>{winner.candidateName}</strong></p>
                        <p>Reg. No: <strong>{winner.regNo}</strong></p>
                        <p>Votes: <strong>{winner.votes}</strong></p>
                    </div>}
                </div>

            </div>
        </>
    )
}

export default UserResult