import React, {useCallback, useState} from 'react';
import './ListChat.css'
import { NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addListChatAction, deleteListChatAction} from "../../store/listChat/actions";
import uuid from "uuid/dist/v4";
import { addMessagesListChatAction} from "../../store/chats/actions";
import {selectListChat} from "../../store/listChat/selectors";

export const ListChat=()=>{
    const listChat=useSelector(selectListChat)
    const [value, setValue] = useState("")
    const dispatch=useDispatch()
    const removeItem=useCallback((id)=>{
       dispatch(deleteListChatAction(id))
   },[])
const addChat=useCallback((name)=>{
       const newId=uuid();
       dispatch(addListChatAction({name,id: newId}))
    dispatch(addMessagesListChatAction(newId))

        console.log(newId)
},[])
const handlerSubmit=(e)=>{
    e.preventDefault()
    addChat(value)
}
const handlerChange=(event)=>{
      setValue(event.target.value)
}
  return(
      <div className=" container  bg-dark text-white ">
          <h3 className="text-center p-4 " >List Chat</h3>
          {listChat.map((item)=>(
              <div className="d-flex flex-column align-items-center lh-lg" key={item.id}>
                  <span className="nav-item ">
                      <NavLink style={({isActive}) =>({color:isActive ? "indigo":"white"})} className="nav-link" to={`/chats/${item.id}`}>{item.name}
                          <button className="btn btn-light border  opacity-100 rounded-end " onClick={()=>removeItem(item.id)}>&#215;</button>
                      </NavLink>
                  </span>

              </div>
          ))}
          <div className="d-flex justify-content-center align-items-end">
          <form className="rounded formName" onSubmit={handlerSubmit} >
          <input className="textName" type="text" value={value} onChange={handlerChange}/>
              <button className="btn btn-light border  opacity-100 rounded-end" >&#10798;</button>
          </form>
          </div>

      </div>)
}


