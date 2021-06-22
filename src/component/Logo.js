import React from 'react';
import './Logo.css';

const Logo = () => {
    const refreshPage = ()=>{
        window.location.reload();
    }
    return (
        <div>
            <img src='https://img.freepik.com/free-vector/letter-m-with-pulse-music-player-element-logo-template-electronic-music-equalizer-store-dj-nightclub-disco-audio-wave-logo-concept-multimedia-technology-themed-abstract-shape_207119-189.jpg?size=626&ext=jpg' alt='logo-pic' onClick={refreshPage}/>
        </div>
    );
};

export default Logo;