import uuid from "uuid/dist/v4";
import {Authors} from "../../utils/variable";
import {MessageList} from "../Message/MessageList";
import {Form} from "../Form/Form";
import {ListChat} from "../ListChat/ListChat";
import {useCallback, useEffect, useState} from "react";
import "./Chats.css"
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addMessagesAction, addMessageWithThunk} from "../../store/chats/actions";
import {selectChats} from "../../store/chats/selectors";

function Chats() {
    const {id}=useParams();
    const navigate=useNavigate();
    const messageList=useSelector(selectChats)
    const dispatch=useDispatch()
   /* useEffect(()=>{
        if(messageList[id]?.length && messageList[id]?.[messageList[id]?.length-1].author !== Authors.robot){
            const timeout= setTimeout(()=> handlerSendText({
                text:'How are you?',
                author:Authors.robot,
                id: uuid()
            }),2000)
            return ()=>clearTimeout(timeout);
        }

    },[messageList])*/

    const handlerSendText =useCallback((messageList)=>{
        //setMessageList((prevMessageList)=>({...prevMessageList,[id]:[...prevMessageList[id],value]}));
        dispatch(addMessageWithThunk(id,messageList))
    },[messageList,id]);

    if(!messageList[id]){
        return (
            <Navigate replace to ="*" />
        )
    }
    return (
        <div className="App">
            <main className="main-app  bg-info">
                <div className="row">
                    <div className="col d-flex flex-column g-2">
                        <MessageList messageList={messageList[id]}/>
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

export default Chats;