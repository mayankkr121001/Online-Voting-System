import AdminNav from "./AdminNav"
import SideBar from "./SideBar"

const Result = () => {
    return (
        <>
            <div className='resultContainer'>
                <AdminNav />
                <div className="resultDiv">
                    <SideBar />
                    <div className="resultSection">
                        <h1>Result</h1>
                        <div className="resultDetails">
                            <div className="resultCandidateList">
                                <table border="1">
                                    <tbody>
                                        <tr>
                                            <th>S No</th>
                                            <th>Name</th>
                                            <th>Roll</th>
                                            <th>Semester</th>
                                            <th>Votes</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Anom</td>
                                            <td>19</td>
                                            <td>BCA Sem 6</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Megha</td>
                                            <td>20</td>
                                            <td>BCA Sem 6</td>
                                            <td>8</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="resultWinnerdiv">
                                <h2>Winner</h2>
                                <p>Name: Anom</p>
                                <p>Roll No: 19</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Result