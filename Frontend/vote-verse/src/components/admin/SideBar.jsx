import React from 'react'
import man1 from "../../assets/man1.png"
import { Link } from 'react-router-dom'

const SideBar = () => {
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
                    <Link to="/admin/votingstatus" className="sideBarLink">
                        <li>Voting Status</li>
                    </Link>
                    <hr />
                    <Link to="/admin/result" className="sideBarLink">
                        <li>Result</li>
                    </Link>
                    <hr />
                </ul>
            </div>
        </>
    )
}

export default SideBar