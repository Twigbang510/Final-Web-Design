import './SingleTask.css'
import {useState, useEffect} from "react"
import {EditOutlined,DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

export default function SingleTask ({data, listId, headers}) {
    const [editList, setEditList] = useState(false)
    const [name, setName] = useState()
    const editTask = async () => {
        await axios
        .patch(`http://dev.thanqminh.com:3000/task_lists/${listId}/todos/${data.id}`, {name: name}, {headers: headers})
        .then((res)=> {
            setTimeout(() => {
                window.location.reload()
            }, 100);
        })
    }
    const handleTodoDone = async () => {
        await axios
        .patch(`http://dev.thanqminh.com:3000/task_lists/${listId}/todos/${data.id}`, {done: !data.done}, {headers: headers})
        .then(()=>{
            setTimeout(() => {
                window.location.reload()
            }, 100);
        })
    }

    const delTask = async () => {
        await axios
        .delete(`http://dev.thanqminh.com:3000/task_lists/${listId}/todos/${data.id}`, {headers: headers})
        .then((res)=> {
            setTimeout(() => {
                window.location.reload()
            }, 100);
        })
    }

    return(
        <div className="single__task">
            <div className="task__content">
            {editList ? (<input className="form__nameTask" value={name || ''} placeholder={data.name} onChange={(e) => setName(e.target.value)}/>
            ):(
                <>
                    <input type="checkbox"
                        defaultChecked={data.done}
                        onChange={handleTodoDone}
                    />
                    <p style={{
                    ...(data.done
                    ? {
                        textDecorationLine: "line-through",
                        fontStyle: "italic",                        
                        }
                    : {}),}}>{data.name}</p>
                </>
            )}
            </div>
            <div className="task__opts">
            { editList ? (
                <div className="save__btn" 
                    onClick={() => {
                        editTask()
                        setEditList(!editList)
                    }}> save </div>
            ):(
                <>
                <EditOutlined onClick={() => setEditList(!editList)}/>
                <DeleteOutlined onClick={delTask}/>
                </>
            )}
                
            </div>
        </div>
    )
}