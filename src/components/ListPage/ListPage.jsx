import React from "react";
import "./ListPage.css";
import SingleList from "../SingleList/SingleList"
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";

const ListPage = () => {
  const [name, setName] = useState()
  const [desc, setDesc] = useState()
  const [lists, takeLists] = useState([])
  const [editList, setEditList] = useState()
  const user = JSON.parse(localStorage.getItem("task-user"));
  // prettier-ignore
  const headers = {
    "access-token": user.access_token,
    'uid': user.uid,
    'client': user.client,
  };
  const handleAddList = async() => {
    const data = {
      name: name,
      description: desc
    }
    await axios
    .post('http://dev.thanqminh.com:3000/task_lists', data, {headers:headers})
    .then((res)=>{
      window.location.reload()
      console.log('success')
    })
  }

  const getList = async () => {
    await axios
    .get('http://dev.thanqminh.com:3000/task_lists', {headers:headers})
    .then((res)=> {
      takeLists(res.data)
    })
  }

  
  useEffect(() => {
    getList()
  }, [])

  return (
    <>
      <Navbar/>
      <div className="container__listPage">
        <div className="header__tasklist">
            Task List
          </div>
        <div className="header__title">
          <div>
            <input
              type='text'
              value={name || ''}
              onChange={(e)=> setName(e.target.value)}
              placeholder="enter name list"

            />
            <span> - </span>
            <input
              type='text'
              value={desc || ''}
              onChange={(e)=> setDesc(e.target.value)}
              placeholder="enter description"

            />
          </div>
          <div onClick={handleAddList} className="button_addList"> 
            <p>+ Add new list</p>
          </div>
        </div>
        <div className="all__List">
          {lists.map((list, index)=>(
            <SingleList key={list.id} headers={headers} data={list}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListPage;
