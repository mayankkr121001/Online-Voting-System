import React from 'react'
import navLogo from "../../assets/fingerprint.png"

const AdminNav = () => {
    return (
        <>
            <div className='navContainer'>
                <div className="logo">
                    <img src={navLogo} alt="logo" id='logoImg' />
                </div>
                <h1>VOTEVERSE</h1>
            </div>
        </>
    )
}

export default AdminNav