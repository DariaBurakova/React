import React, {useCallback, useEffect, useState} from 'react';
import './ListChat.css'
import { NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addChatsThunk,initChatsThunk} from "../../store/listChat/actions";
import uuid from "uuid/dist/v4";
import {selectListChat} from "../../store/listChat/selectors";
import {deletChatsThunk} from "../../store/listChat/actions";

export const ListChat=()=>{
    const listChat=useSelector(selectListChat)
    const [value, setValue] = useState("")
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(initChatsThunk())

    },[])
    const removeItem=useCallback((id)=>{
        dispatch(deletChatsThunk(id))

   },[])
const addChat=useCallback((name)=>{
       const newId=uuid();
       dispatch(addChatsThunk({name,id: newId}))

    setValue('')

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


