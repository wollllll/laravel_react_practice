import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul className="nav">
                <li>
                    <Link to="/">Top</Link>
                </li>
                <li className="ml-2">
                    <Link to="/users">
                        Users
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
