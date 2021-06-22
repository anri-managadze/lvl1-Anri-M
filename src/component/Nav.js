import React from 'react';
import './Nav.css';
const Nav = () => {
    return (
        <div className='nav'>
            <ul>
                <li>Home</li>
                <li>Free music</li>
                <li>Playlist</li>
                <li>Favorites</li>
                <li>History</li>
                <li>
                    <button id="nav_btn">Add Music</button>
                </li>
            </ul>
        </div>
    );
};

export default Nav;