import React from 'react';
import LogoPic from './Best Movies.png'
import "./NavBar.css"

function Navbar() {
    return (

        <div>
            <nav className="navbar">
                <img
                    className="navbar__logo"
                    src={LogoPic}
                    alt="Best Movies Logo"
                />

                <ul className="navbar__links" style={{ flexWrap: "wrap" }}>
                    <li>
                        <a href="#hpme">Home</a>
                    </li>
                    <li>
                        <a href="#List">Movies List</a>
                    </li>
                    <li>
                        <a href="#Addnew">Add Movie</a>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default Navbar;
