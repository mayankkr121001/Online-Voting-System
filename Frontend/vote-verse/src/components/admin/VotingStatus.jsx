import { useEffect, useState } from "react"
import AdminNav from "./AdminNav"
import SideBar from "./SideBar"
import axios from "axios"

const VotingStatus = () => {
    const [votinStatus, setVotingStatus] = useState([]);


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/votingStatus`)
        .then(res => {
            // console.log(res.data.votingStatus);
            setVotingStatus(res.data.votingStatus)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div className='votingStatusContainer'>
                <AdminNav />
                <div className="votingStatusDiv">
                    <SideBar />
                    <div className="votingStatusSection">
                        <div className="votingStatusHeading"><h1>Voting Status</h1>
                            <div className="votingStatusList">
                                <table border="1">
                                    <tbody>
                                        <tr>
                                            <th>S No</th>
                                            <th>Voter Name</th>
                                            <th>Voter Reg. No.</th>
                                            <th>Candidate Name</th>
                                            <th>Symbol</th>
                                        </tr>
                                        {votinStatus.map((item, index) => (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.voterName}</td>
                                            <td>{item.voterRegNo}</td>
                                            <td>{item.candidateName}</td>
                                            <td><img className="voterImage" src={item.symbol.replace(item.symbol.slice(21, 28), "")} alt="" /></td>
                                        </tr>

                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VotingStatus