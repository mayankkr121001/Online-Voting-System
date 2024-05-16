import React, { useState } from 'react'
import axios from 'axios'

const AddVoterForm = ({ closeAddVoter }) => {
    const [name, setName] = useState("");
    const [regNo, setRegNo] = useState();
    const [semester, setSemester] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState();

    function handleImageInput(e){
        // console.log(e.target.files[0]);
        setImage(e.target.files[0]);
    }

    function onVoterFormAddBtnClick(e) {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("regNo", regNo);
        formData.append("semester", semester);
        formData.append("password", password);
        formData.append("image", image);

        axios.post(`http://127.0.0.1:8000/api/voters`, formData)
            .then((res => {
                alert(res.data.message);
            }))
            .catch((error) => {
                if (error.response) {
                    if (error.response.status === 422) {
                        // console.log(error);
                        alert("Fields empty! or Not unique!");
                    }
                    if (error.response.status === 500) {
                        alert(error.response.data.message);
                    }

                }
            });
        setName("");
        setRegNo();
        setSemester("");
        setPassword("");
        setImage();
    }

    return (
        <div className='addVoterFormContainer'>
            <div className="addVoterFormDiv">
                <div className="addVoterCloseBtn">
                    <h2 onClick={closeAddVoter}>x</h2>
                </div>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)}  placeholder='Full Name' />
                <input type="text" name="regNo" onChange={(e) => setRegNo(e.target.value)}  placeholder='Registration No.' />
                <input type="text" name="semester" onChange={(e) => setSemester(e.target.value)}  placeholder='Semester' />
                <input type="text" name="password" onChange={(e) => setPassword(e.target.value)}  placeholder='Set Password' />
                <div c lassName='voterFormImageDiv'>
                    <label>upload Image:</label>
                    <input type="file" name="image" onChange={handleImageInput} />
                </div>
                <button onClick={onVoterFormAddBtnClick} className="addVoterFormBtn">Add</button>
            </div>
        </div>
    )
}

export default AddVoterForm