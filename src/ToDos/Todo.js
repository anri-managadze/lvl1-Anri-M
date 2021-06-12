import React, {useState} from 'react';
import './Todo.css'
import List from "./List";
import TitleInput from "./TitleInput";

const Todo = () => {
    const [data, setData]=useState([
        {
            title: '',
            checked: false,
            editingText: ''
        }
    ]);
    const addTodo =(title)=> {
        setData([
            {
                title: title,
                checked: false,
            },
            ...data
        ]);
    }

    return (
        <div className='todo'>
            <h2>ToDo List</h2>
            <TitleInput onSubmit={addTodo} />
            <List data={data} setData={setData} />
        </div>
    );
}

export default Todo;