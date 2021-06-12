import {useState} from "react";
import { FaTrashAlt } from "react-icons/fa";
import {FaPencilAlt} from "react-icons/fa";
import {FaCheck} from "react-icons/fa";


const List = ({data, setData}) => {
    const [todoEditing, setTodoEditing] = useState(null);
    const [editingText, setEditingText] = useState("");

    let deleteTodo=(index)=> {
        let newData=[...data];
        newData.splice(index,1);
        setData ([...newData]);
    }

    let toggleStatus =(index)=> {
        let tmp=[...data];
        tmp[index].checked=!tmp[index].checked;
        setData(tmp);
    }

    let submitEdits=(edit)=> {
        let updatedData = [...data].map((el,index) => {
            if (index === edit) {
                el.title = editingText;
            }
            return el;
        });

        setData(updatedData);
        setTodoEditing(null);
    }

    return (
        <ul>
            {data.map((el,index)=>{
                return (
                    <li key={index}>
                        <input type='checkbox' checked={el.checked}   onChange={()=>{toggleStatus(index)}}/>
                        {index === todoEditing ? (
                            <input className='hidden'
                                type="text"
                                   value={editingText}
                                onChange={(e) => setEditingText(e.target.value)}
                            />
                        ) : (
                            <p className={el.checked ? 'text todo-completed' : 'text'}>{el.title}</p>
                        )}
                        {index === todoEditing ? (
                            <button onClick={()=>submitEdits(index)} ><FaCheck className='icon'/></button>
                        ) : (
                            <button onClick={() => {setTodoEditing(index); setEditingText(el.title); }}><FaPencilAlt className='icon' /></button>
                        )}
                        <button onClick={()=>{
                            deleteTodo(index)
                        }}><FaTrashAlt className='icon'/></button>
                    </li>
                )
            })}
        </ul>
    );
};

export default List;