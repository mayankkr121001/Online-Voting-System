import React, { useState } from 'react'
import axios from 'axios'

const AddVoterForm = ({ closeAddVoter }) => {

    const [voter, setVoter] = useState({
        name: "",
        roll: "",
        semester: "",
        password: ""

    })

    function handleInput(e) {
        setVoter({ ...voter, [e.target.name]: e.target.value })
    }

    function onVoterFormAddBtnClick(e) {
        const data = {
            name: voter.name,
            roll: voter.roll,
            semester: voter.semester,
            password: voter.password

        }

        axios.post(`http://127.0.0.1:8000/api/voters`, data)
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
        setVoter({
            name: "",
            roll: "",
            semester: "",
            password: ""
    
        });
    }

    return (
        <div className='addVoterFormContainer'>
            <div className="addVoterFormDiv">
                <div className="addVoterCloseBtn">
                    <h2 onClick={closeAddVoter}>x</h2>
                </div>
                <input type="text" name="name" onChange={handleInput} value={voter.name} placeholder='Full Name' />
                <input type="text" name="roll" onChange={handleInput} value={voter.roll} placeholder='Roll No' />
                <input type="text" name="semester" onChange={handleInput} value={voter.semester} placeholder='Semester' />
                <input type="text" name="password" onChange={handleInput} value={voter.password} placeholder='Set Password' />
                <button onClick={onVoterFormAddBtnClick} className="addVoterFormBtn">Add</button>
            </div>
        </div>
    )
}

export default AddVoterForm