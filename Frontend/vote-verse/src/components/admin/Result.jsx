import { useState, useEffect } from "react";
import AdminNav from "./AdminNav"
import SideBar from "./SideBar"
import axios from "axios"

const Result = () => {
    const [result, setResult] = useState([]);
    const [winner, setWinner] = useState({});


    const [resultShowed, setResultShowed] = useState(false);


    function onShowResultClick(){
        axios.get(`http://127.0.0.1:8000/api/result`)
        .then(res => {
            // console.log(res.data.result);
            setResult(res.data.result);
            if(res.data.result){
                setResultShowed(true);
            }
        })
        .catch(err => {
            console.log(err);
        })
        axios.get(`http://127.0.0.1:8000/api/getWinner`)
        .then(res => {
            // console.log(res.data.candidate);
            setWinner(res.data.candidate)
            
        })
        .catch(err => {
            console.log(err);
        })
    }
    

    return (
        <>
            <div className='resultContainer'>
                <AdminNav />
                <div className="resultDiv">
                    <SideBar />
                    <div className="resultSection">
                        <h1>Result</h1>
                        {resultShowed ? <button disabled={true} onClick={onShowResultClick} className="showResultBtn"> Result Showed</button>: <button onClick={onShowResultClick} className="showResultBtn">Show Result</button>}
                        
                        <div className="resultDetails">
                            <div className="resultCandidateList">
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

                            <div className="resultWinnerdiv">
                                <h2>Winner</h2>
                                <p>Candidate Name: {winner.candidateName}</p> 
                                <p>Reg. No: {winner.votes}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Result