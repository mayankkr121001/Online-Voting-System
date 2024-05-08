import { useState } from "react"
import AddVoterCandidateForm from "./AddVoterCandidateForm"
import AdminNav from "./AdminNav"
import SideBar from "./SideBar"

const Voters = () => {
    const [addFormStatus, setAddFormStatus] = useState(false);

    function addVoterBtnClick(){
        setAddFormStatus(true);
    }
    function closeAddVoterCandidate(){
        setAddFormStatus(false);

    }

    return (
        <>
            <div className='votersContainer'>
                <AdminNav />
                <div className="votersDiv">
                    <SideBar />
                    <div className="votersSection">
                        <div className="voterListHeading"><h1>Voters List</h1>
                        </div>
                        <button onClick={addVoterBtnClick} className="addVoterBtn">Add Voter +</button>
                        <div className="votersList">
                            <table border="1">
                            <tbody>
                                <tr>
                                    <th>S No</th>
                                    <th>Name</th>
                                    <th>Roll</th>
                                    <th>Semester</th>
                                    <th>Tools</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Anom</td>
                                    <td>19</td>
                                    <td>BCA Sem 6</td>
                                    <td>
                                        <button className="deleteBtn">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Megha</td>
                                    <td>19</td>
                                    <td>BCA Sem 6</td>
                                    <td>
                                        <button className="deleteBtn">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Subham</td>
                                    <td>25</td>
                                    <td>BCA Sem 6</td>
                                    <td>
                                        <button className="deleteBtn">Delete</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                        </div>
                        {addFormStatus && <AddVoterCandidateForm closeAddVoterCandidate={closeAddVoterCandidate}/>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Voters