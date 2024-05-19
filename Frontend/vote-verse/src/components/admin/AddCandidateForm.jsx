import React, { useState } from 'react'
import axios from 'axios'

const AddCandidateForm = ({closeAddCandidate}) => {

    const [name, setName] = useState("");
    const [regNo, setRegNo] = useState();
    const [semester, setSemester] = useState("");
    const [image, setImage] = useState();
    const [symbol, setSymbol] = useState();

    function handleImageInput(e){
        // console.log(e.target.files[0]);
        setImage(e.target.files[0]);
    }
    function handleSymbolInput(e){
        // console.log(e.target.files[0]);
        setSymbol(e.target.files[0]);
    }

    function onCandidateFormAddBtnClick(e) {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("regNo", regNo);
        formData.append("semester", semester);
        formData.append("image", image);
        formData.append("symbol", symbol);

        axios.post(`http://127.0.0.1:8000/api/candidates`, formData)
        .then((res =>{
            alert(res.data.message);
        }))
        .catch((error) =>{
            if(error.response){
                if(error.response.status === 422){
                    // console.log(error);
                    alert("Fields empty! or Not unique! or Cannot be more than two candidates!");
                }
                if(error.response.status === 500){
                    alert(error.response.data.message);
                }

            }
        });
        setName("");
        setRegNo();
        setSemester("");
        setImage();
        setSymbol();
    }
    return (
        <div className='addCandidateFormContainer'>
            <div className="addCandidateFormDiv">
                <div className="addCandidateCloseBtn">
                    <h2 onClick={closeAddCandidate}>x</h2>
                </div>
                <input type="text" name="name" onChange={(e)=>setName(e.target.value)} placeholder='Full Name'/>
                <input type="text" name="regNo" onChange={(e)=>setRegNo(e.target.value)} placeholder='Registration No'/>
                <input type="text" name="semester" onChange={(e)=>setSemester(e.target.value)}  placeholder='Semester'/>
                <div className='candidateFormImageDiv'>
                    <label>upload Image:</label>
                    <input type="file" name="image" onChange={handleImageInput}  />
                </div>
                <div className='candidateFormSymbolDiv'>
                    <label>upload Symbol:</label>
                    <input type="file" name="symbol" onChange={handleSymbolInput}  />
                </div>
                <button onClick={onCandidateFormAddBtnClick}  className="addCandidateFormBtn">Add</button>
            </div>
        </div>
    )
}

export default AddCandidateForm