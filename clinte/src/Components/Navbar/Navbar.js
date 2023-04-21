import React from 'react'
import "./Navbar.css"


function Navbar({ user }) {
    user=JSON.parse(user)

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        window.location.replace("/")
    }

    return (
        <div className='navbarBigBox'>
            <nav className="navbar navbar-expand-lg">
                <div>
                    <img style={{width:"35px", height:"35px", marginLeft:"20px"}} 
                    src='https://to-do-cdn.microsoft.com/static-assets/c87265a87f887380a04cf21925a56539b29364b51ae53e089c3ee2b2180148c6/icons/logo.png'alt='eoror'/>
                </div>
                <h2>Welcome  {user.name}</h2>
                <div id="navbarDP" >
                    <h3>{new Date().toISOString().split("T")[0]}</h3>
                    <a href='/profile'><img id="navbarProfile" src={user.profile} alt="Loading" /></a>
                    <img id="logoutImage" src="https://cdn.iconscout.com/icon/premium/png-128-thumb/logout-1-110657.png" onClick={logout} />
                </div>
            </nav>
        </div>
    )
}

export default Navbar