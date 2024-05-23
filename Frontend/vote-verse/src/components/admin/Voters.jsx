import { useEffect, useState } from "react"
import axios from "axios"
import AddVoterForm from "./AddVoterForm"
import AdminNav from "./AdminNav"
import SideBar from "./SideBar"

const Voters = () => {
    const [addFormStatus, setAddFormStatus] = useState(false);

    const [voter, setVoter] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/voters`)
            .then(res => {
                // console.log(res.data.voters[2].image.replace(res.data.voters[2].image.slice(21,28), ""));
                setVoter(res.data.voters);
            })
            .catch(err => console.log(err));
    })

    function deleleVoterBtnClick(id){
        axios.delete(`http://127.0.0.1:8000/api/voters/${id}/delete`)
        .then(res => {
            alert(res.data.message)
        })
        .catch(err =>{
            alert(err);
        })
    }


    function addVoterBtnClick() {
        setAddFormStatus(true);
    }
    function closeAddVoter() {
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
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Reg. No.</th>
                                        <th>Semester</th>
                                        <th>Password</th>
                                        <th>Tools</th>
                                    </tr>
                                    {voter.map((item, index) => (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td><img className="voterImage" src={item.image.replace(item.image.slice(21, 28), "")} alt="" /></td>
                                            <td>{item.name}</td>
                                            <td>{item.regNo}</td>
                                            <td>{item.semester}</td>
                                            <td>{item.password}</td>
                                            <td>
                                                <button onClick={()=>deleleVoterBtnClick(item.id)}className="deleteBtn">Delete</button>
                                            </td>
                                        </tr>

                                    ))}
                                    
                                </tbody>
                            </table>

                        </div>
                        {addFormStatus && <AddVoterForm closeAddVoter={closeAddVoter} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Voters