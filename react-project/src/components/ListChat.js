import React, {useCallback, useState} from 'react';
import './ListChat.css'
import { NavLink} from "react-router-dom";
const chats=[
    {
        id:"chat1",
        name:'Chat № 1 '
    },
    {
        id:"chat2",
        name:'Chat № 2 '
    },
    {
        id:"chat3",
        name:'Chat № 3 '
    }
];
export const ListChat=()=>{
    const [listChat,setListChat]=useState(chats)
    const removeItem=(id)=>{
        setListChat(prevListChat=>prevListChat.filter(item => item.id !==id))
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

      </div>)
}


