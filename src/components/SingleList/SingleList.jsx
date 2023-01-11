import './SingleList.css'
import SingleTask from '../SingleTask/SingleTask';
import axios from 'axios'
import {useState, useEffect} from "react"
import { PlusCircleOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';

export default function SingleList({data, headers}) {
    const [todo, postTodo] = useState()
    const [toDos, getToDos] = useState()
    const [editList, setEditList] = useState(false)
    const [name, setName] = useState()
    const [desc, setDesc] = useState()

    const handleTodo = async () => {
        await axios
        .post(`http://dev.thanqminh.com:3000/task_lists/${data.id}/todos`,{name: todo, done: false},{headers:headers})
        .then((res)=>{

            window.location.reload()            
        })
    }
    const handleDelete = async () => {
        await axios
        .delete(`http://dev.thanqminh.com:3000/task_lists/${data.id}`, {headers:headers})
        .then(()=>{
            // console.log('success')
            alert('delete list success')
            setTimeout(() => {
                window.location.reload()
            }, 400);
        })
    }
    const handleEdit = async () => {
        await axios
        .patch(`http://dev.thanqminh.com:3000/task_lists/${data.id}`,{name: name, description: desc},{headers:headers})
        .then((res)=>{
            window.location.reload()        
        })
    }
    const getTaskList = async () => {
        await axios
        .get(`http://dev.thanqminh.com:3000/task_lists/${data.id}/todos`, {headers:headers})
        .then((res)=> {
            getToDos(res.data)
        })
    }

    useEffect(() => {
        getTaskList()
    },[])
    return(
        <div className="SingleList">
            <div className="header_list">
                {editList ? (
                    <div className='form__editList'>
                        <input 
                            className='form__name'
                            type="text" value={name || ''}
                            placeholder={data.name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                        <span> - </span>
                        <input
                            className='form__desc'
                            type="text" value={desc || ''}
                            placeholder={data.description}
                            onChange={(e)=>setDesc(e.target.value)}
                        />
                    </div>
                ):(
                    <div>
                        <strong>{data.name} - {data.description}</strong>
                    </div>
                )}
                <div className="list__opts">
                {editList
                    ? (<div className="save__btn" 
                        onClick={() => {
                            handleEdit()
                            setEditList(!editList)
                        }}
                        > save </div>) 
                    : (<EditOutlined style={{border:"1px solid", borderRadius:"5px"}} onClick={() => setEditList(!editList)}/>)}
                    <DeleteOutlined style={{color: 'red', border:"1px solid", borderRadius:"5px"}} onClick={handleDelete}/>
                </div>
            </div>
            <div className="list__tasks">
                <div className="list__add-task">
                <input 
                    type='text'
                    value={todo || ''}
                    onChange={(e)=>postTodo(e.target.value)}
                    placeholder="enter your task"
                />
                <div className="btn__addTask">
                    <PlusCircleOutlined onClick={handleTodo}/>
                </div>
                </div>
                {toDos && toDos.map((todo, index)=> (
                    <SingleTask key={todo.id} headers={headers} listId={data.id} data={todo}/>
                ))}
            </div>
        </div>
    )
}