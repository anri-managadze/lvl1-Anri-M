import React, {useState} from 'react';

const Drum2=()=>{
    const [display, setDisplay] = useState('Press some key...');
    const data2 = [
        {id: 'Chord-1', letter: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'},
        {id: 'Chord-2', letter: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'},
        {id: 'Chord-3', letter: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'},
        {id: 'Shaker', letter: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'},
        {id: 'Open-HH', letter: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'},
        {id: 'Closed-HH', letter: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'},
        {id: 'Punchy-Kick', letter: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'},
        {id: 'Side-Stick', letter: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'},
        {id: 'Snare', letter: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'}
    ]
    let playSound2= (event)=> {
        const drumPad2 = data2.filter(pad2 => pad2.id === event.target.id);
        const sound2 = document.getElementById(drumPad2[0].letter);
        sound2.currentTime = 0;
        sound2.play();
        setDisplay(drumPad2[0].id);
    }
    return (
        <div>
            <div id="display" >
                {display}
            </div>
            <div className='buttons'>
            {data2.map(pad2 => (
                <button id={pad2.id} onClick={playSound2}>
                    {pad2.letter}
                    <audio id={pad2.letter} className="clip" src={pad2.src} />
                </button>

            ))}
            </div>

        </div>
    );
}

export default Drum2;