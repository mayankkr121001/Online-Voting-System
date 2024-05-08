import React from 'react'

const AddVoterCandidateForm = ({closeAddVoterCandidate}) => {
    return (
        <div className='addFormContainer'>
            <div className="addFormDiv">
                <div className="closeBtn">
                    <h2 onClick={closeAddVoterCandidate}>x</h2>
                </div>
                <input type="text" placeholder='Full Name'/>
                <input type="text" placeholder='Roll No'/>
                <input type="text" placeholder='Semester'/>
                <button className="addBtn">Add</button>
            </div>
        </div>
    )
}

export default AddVoterCandidateForm