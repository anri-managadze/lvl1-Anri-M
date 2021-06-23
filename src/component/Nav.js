import React from 'react';
import './Nav.css';
import Modal from "./Modal";
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
                    <Modal btnText='Add Music' title={<h4>Add Your Music</h4>}>
                        <div className='add'>
                            <input type="text" placeholder="Music Name"/>
                            <input type="text"  placeholder="Artist Name" />
                            <input type="text"  placeholder="Country" />
                            <input type="file"  />
                            <input type="submit" id="mod_sub" />
                        </div>
                    </Modal>
                </li>
            </ul>
        </div>
    );
};

export default Nav;