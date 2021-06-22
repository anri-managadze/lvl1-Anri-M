import React from 'react';
import {useState,useEffect} from "react";
import ReactAudioPlayer from 'react-audio-player';

const Itunes = ({search}) => {
    const [music, setMusic]= useState({ });

    useEffect(()=> {
        if(!!search){
            getData()
        }
    },[search]);


    const getData=()=> {
        fetch(`https://itunes.apple.com/search?term=${search}`)
            .then(res => res.json())
            .then(data => {
                setMusic(data);
                console.log(data);
            });
    }

    return (
    <div className='itunes'>
        {(typeof music.results != 'undefined') ? (
            <ul>
                { music.results.map((el) => {
                    return (
                        <div className='container'>
                            <div className='member'>
                                <div><img src={el.artworkUrl100} alt='ff'/></div>
                                <h4>{el.artistName}</h4>
                                <ReactAudioPlayer
                                    src={el.previewUrl}
                                    controls
                                />
                                </div>
                        </div>
                    )
                })}
            </ul>
        ) : (' ')}
    </div>
    )
};

export default Itunes;