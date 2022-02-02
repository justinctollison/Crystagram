import React, {userState} from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo">
                        Home
                    </Link>
                    <Link to="/" className="navbar-logo">
                        Messages
                    </Link>
                    <Link to="/">
                        User Profile
                    </Link>
                    <Link to="/">
                        Logout
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
