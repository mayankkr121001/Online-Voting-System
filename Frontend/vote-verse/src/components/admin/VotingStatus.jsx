import AdminNav from "./AdminNav"
import SideBar from "./SideBar"

const VotingStatus = () => {
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
                                            <th>Name</th>
                                            <th>Roll</th>
                                            <th>Semester</th>
                                            <th>Status</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Anom</td>
                                            <td>19</td>
                                            <td>BCA Sem 6</td>
                                            <td>Voted</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Megha</td>
                                            <td>19</td>
                                            <td>BCA Sem 6</td>
                                            <td>Not Voted</td>
                                        </tr>
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