import {useState} from "react";
import Switch from '@material-ui/core/Switch';
import Drum2 from "./Drum2";
import './Drum.css';
import Range from './Range'






function Switches({state,setState}) {
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            {state.checkedB ? <Drum1 /> : <Drum2 /> }
            <Switch
                checked={state.checkedB}
                onChange={handleChange}
                color='default'
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />

        </div>
    );
}







const Drum = () => {
    const [state, setState] = useState({
        checkedB: true
    });
    return (
        <div id="drum-machine">
            <Switches state={state} setState={setState} />
            <Range />
        </div>
    );
};

const Drum1=()=> {
    const [display, setDisplay] = useState('Press some key...');
    const data= [
        { id: 'Heater-1', letter: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
        { id: 'Heater-2', letter: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
        { id: 'Heater-3', letter: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
        { id: 'Heater-4', letter: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
        { id: 'Clap', letter: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
        { id: 'Open-HH', letter: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
        { id: "Kick-n'-Hat", letter: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
        { id: 'Kick', letter: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
        { id: 'Closed-HH', letter: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'  },
    ];
    let playSound= (event)=> {
        const drumPad = data.filter(pad => pad.id === event.target.id);
        const sound = document.getElementById(drumPad[0].letter);
        sound.currentTime = 0;
        sound.play();
        setDisplay(drumPad[0].id);
    }
    return (
        <div>
            <div id="display" >
                {display}
            </div>
            <div className='buttons'>
                {data.map(pad => (
                    <button id={pad.id} onClick={playSound} >
                        {pad.letter}
                        <audio id={pad.letter} className="clip" src={pad.src}/>
                    </button>
                ))}
            </div>
        </div>
 );
}
export default Drum;