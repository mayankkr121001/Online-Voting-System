import React, {useState} from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie';
import { Navigate } from "react-router-dom";
import man1 from "../../assets/man1.png"
import { Link } from 'react-router-dom'

import logoutIcon from "../../assets/shutdown.png"

const SideBar = () => {
    const [adminLoggedOut, setAdminLoggedOut] = useState(false);

    function onLogoutClick(){
        axios.post(`http://127.0.0.1:8000/api/adminLogout`)
        .then(res =>{
            // console.log(res);
            if(res.data.success === true){
                setAdminLoggedOut(true);
                const cookies = new Cookies();
                cookies.remove('adminData', { path: '/' })
                console.log(cookies.get('adminData'));
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <div className='sideBarContainer'>
                <div className='adminImage'>
                    <img src={man1} alt="admin" />
                </div>
                <h1>Admin</h1>
                <ul className='unorderdList'>
                    <hr />
                    <Link to="/admin/dashboard" className="sideBarLink">
                        <li>Dashboard</li>
                    </Link>
                    <hr />
                    <Link to="/admin/voters" className="sideBarLink">
                        <li>Voters</li>
                    </Link>
                    <hr />
                    <Link to="/admin/candidates" className="sideBarLink">
                        <li>Candidates</li>
                    </Link>
                    <hr />
                    <Link to="/admin/scheduler" className="sideBarLink">
                        <li>Scheduler</li>
                    </Link>
                    <hr />
                    <Link to="/admin/result" className="sideBarLink">
                        <li>Result</li>
                    </Link>
                    <hr />
                </ul>
                <div className="adminLogoutDiv">
                    <img src={logoutIcon} alt="logout" />
                    <p onClick={onLogoutClick}>Logout</p>
                </div>
            </div>
            {adminLoggedOut && <Navigate to="/admin/login" replace />}
        </>
    )
}

export default SideBar