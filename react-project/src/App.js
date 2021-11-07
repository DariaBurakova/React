
import './App.css';
import {useCallback, useEffect, useState} from "react";
import {Form} from "./components/Form";
import {MessageList} from "./components/MessageList";
import {Authors} from "./utils/variable";
import uuid from 'uuid/dist/v4';
import {ListChat} from "./components/ListChat"

const text=[
    {id:uuid(),text:'', author:''}
];

function App() {
    const [messageList,setMessageList]=useState(text);

    useEffect(()=>{
        if(messageList.length && messageList[messageList.length-1].author !== Authors.robot){
          const timeout= setTimeout(()=> handlerSendText({
                text:'How are you?',
                author:Authors.robot,
                id: uuid()
            }),2000)
            return ()=>clearTimeout(timeout);
        }

  },[messageList])

const handlerSendText = useCallback((value)=>{
        setMessageList(prevMessageList=>[...prevMessageList,value])
    },[])

  return (
    <div className="App">
        <main className="main-app  bg-info">
            <div className="row">
            <div className="col d-flex flex-column g-2">
            <MessageList messageList={messageList}/>
                </div>
            <div className="col d-flex flex-column-reverse align-items-end p-3">
            <Form onSendMessage={handlerSendText}/>
            </div>
            <div className=" listChat col-4 opacity-75">
                <ListChat/>
            </div>
            </div>
        </main>

    </div>
  );
}

export default App;
