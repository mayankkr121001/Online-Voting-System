import { useState } from "react"
import AddVoterCandidateForm from "./AddVoterCandidateForm"
import AdminNav from "./AdminNav"
import SideBar from "./SideBar"

const Candidates = () => {
    const [addFormStatus, setAddFormStatus] = useState(false);

    function addCandidateBtnClick(){
        setAddFormStatus(true);
    }
    function closeAddVoterCandidate(){
        setAddFormStatus(false);

    }

    return (
        <>
            <div className='candidatesContainer'>
                <AdminNav />
                <div className="candidatesDiv">
                    <SideBar />
                    <div className="candidatesSection">
                        <div className="candidateListHeading"><h1>Candidate List</h1>
                        </div>
                        <button onClick={addCandidateBtnClick} className="addCandidateBtn">Add Candidate +</button>
                        <div className="candidatesList">
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

export default Candidates