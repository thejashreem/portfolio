import React from 'react'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar_container">
                    <ul className="navbar_left">
                        <div className="navbar_left-logo">
                           <h1> Thejashree M </h1>
                        </div>
                    </ul>
                    <ul className="navbar_right">
                        <li>Home</li>
                        <li>Academics</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contacts</li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default NavBar
