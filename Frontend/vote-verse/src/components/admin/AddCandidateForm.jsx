import React, { useState } from 'react'
import axios from 'axios'

const AddCandidateForm = ({closeAddCandidate}) => {

    const [candidate, setCandidate] = useState({
        name: "",
        roll: "",
        semester: ""
    })

    function handleInput(e) {
        setCandidate({ ...candidate, [e.target.name]: e.target.value })
    }

    function onCandidateFormAddBtnClick(e) {
        const data = {
            name: candidate.name,
            roll: candidate.roll,
            semester: candidate.semester
        }

        axios.post(`http://127.0.0.1:8000/api/candidates`, data)
        .then((res =>{
            alert(res.data.message);
        }))
        .catch((error) =>{
            if(error.response){
                if(error.response.status === 422){
                    alert("Fields empty!");
                }
                if(error.response.status === 500){
                    alert(error.response.data.message);
                }

            }
        });
        setCandidate({
            name: "",
            roll: "",
            semester: ""
        });
    }
    return (
        <div className='addCandidateFormContainer'>
            <div className="addCandidateFormDiv">
                <div className="addCandidateCloseBtn">
                    <h2 onClick={closeAddCandidate}>x</h2>
                </div>
                <input type="text" name="name" onChange={handleInput} value={candidate.name} placeholder='Full Name'/>
                <input type="text" name="roll" onChange={handleInput} value={candidate.roll} placeholder='Roll No'/>
                <input type="text" name="semester" onChange={handleInput} value={candidate.semester} placeholder='Semester'/>
                <button onClick={onCandidateFormAddBtnClick}  className="addCandidateFormBtn">Add</button>
            </div>
        </div>
    )
}

export default AddCandidateForm