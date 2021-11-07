import React, {useState} from 'react';
import uuid from 'uuid/dist/v4';
import './ListChat.css'
const chats=[
    {
        id:uuid(),
        name:'chat1'
    },
    {
        id:uuid(),
        name:'chat2'
    },
    {
        id:uuid(),
        name:'chat3'
    }
];
export const ListChat=()=>{
    const [listChat,setListChat]=useState(chats)
  return(
      <div className="container bg-dark text-white ">
          <h3 className="text-center p-4 " >List Chat</h3>
          {listChat.map((item)=>(
              <div className="d-flex flex-column align-items-center lh-lg" key={item.id}>
                  <span>{item.name}</span>
              </div>

          ))}
      </div>)
}


