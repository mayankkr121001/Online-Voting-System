import { useEffect, useState } from "react"
import axios from "axios"
import AddCandidateForm from "./AddCandidateForm"
import AdminNav from "./AdminNav"
import SideBar from "./SideBar"

const Candidates = () => {
    const [addFormStatus, setAddFormStatus] = useState(false);

    const [candidate, setCandidate] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/candidates`)
            .then(res => {
                // console.log(res.data.voters);
                setCandidate(res.data.candidates)
            })
            .catch(err => alert(err));
    })

    function deleleCandidateBtnClick(id){
        axios.delete(`http://127.0.0.1:8000/api/candidates/${id}/delete`)
        .then(res => {
            alert(res.data.message)
        })
        .catch(err =>{
            alert(err);
        })
    }

    function addCandidateBtnClick(){
        setAddFormStatus(true);
    }
    function closeAddCandidate(){
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
                                {candidate.map((item, index) => (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.roll}</td>
                                            <td>{item.semester}</td>
                                            <td>
                                                <button onClick={()=>deleleCandidateBtnClick(item.id)}className="deleteBtn">Delete</button>
                                            </td>
                                        </tr>

                                    ))}
                                
                                </tbody>
                            </table>

                        </div>
                        {addFormStatus && <AddCandidateForm closeAddCandidate={closeAddCandidate}/>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Candidates