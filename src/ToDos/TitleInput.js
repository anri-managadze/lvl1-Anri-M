import {useState} from "react";

const TitleInput = ({onSubmit}) => {
    const [title, setTitle]=useState('');
    let handleChange=(e)=> {
        setTitle (e.target.value);
    }
    let handleSubmit=(e)=> {
        e.preventDefault();
        onSubmit(title)
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name='title' placeholder='Enter here' value={title} onChange={handleChange} />
            <button type='submit'>Add</button>
        </form>
    );
};

export default TitleInput;

