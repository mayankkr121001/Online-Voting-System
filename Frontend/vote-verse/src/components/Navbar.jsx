import navLogo from "../assets/fingerprint.png"

const Navbar = () => {
    return (
        <>
            <div className='navBar'>
                <div className="logo">
                    <img src={navLogo} alt="logo" class='logoImg' />
                </div>
                <h1>VOTEVERSE</h1>
            </div>
        </>
    )
}

export default Navbar