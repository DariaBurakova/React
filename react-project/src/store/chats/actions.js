import {Authors} from "../../utils/variable";
import uuid from "uuid/dist/v4";
import {onValue, push, set} from "firebase/database";
import {getChatMessageListRefById, getChatMessageRefById, getChatRefById, messageRef} from "../../services/firebase";

export  const ADD_MESSAGES_ACTION="CHATS::ADD_MESSAGES_ACTION";
export  const ADD_MESSAGES_LISTCHAT_ACTION="CHATS::ADD_MESSAGES_LISTCHAT_ACTION";
export  const SET_MESSAGES_ACTION="CHATS::SET_MESSAGES_ACTION"

export const addMessagesAction=(id,messageList)=>({
   type:ADD_MESSAGES_ACTION,
    payload:{
        id,messageList
    }

})
export const addMessagesListChatAction=(id)=>({
    type:ADD_MESSAGES_LISTCHAT_ACTION,
    idChats:id
})
export const setMessagesAction=(message)=>({
    type:SET_MESSAGES_ACTION,
    payload:message
})


let timeout;
export const addMessageWithThunk=(id,messageList)=>(dispatch)=>{
    dispatch(addMessagesAction(id,messageList));

    if(messageList.author!==Authors.robot){
        if (timeout){
            clearTimeout(timeout)
        }
        const botMessage={
            text:'How are you?',
            author:Authors.robot,
            id:uuid()
        };

     timeout=setTimeout(()=>dispatch(addMessagesAction(id,botMessage)),2000)

    }
}
export const initMessageThunk=()=>(dispatch)=>{
    onValue(messageRef,(snapshot) =>{
        const newMessages={}
        snapshot.forEach((item)=>{
            newMessages[item.key]=Object.values(item.val().messageList || {})
        })
        dispatch(setMessagesAction(newMessages));

    })
}
export const addMessageThunk=(id,messageList)=>(dispatch)=>{
    push(getChatMessageListRefById(id),messageList)
    if(messageList.author!==Authors.robot) {
        if (timeout) {
            clearTimeout(timeout)
        }
        const botMessage = {
            text: 'How are you?',
            author: Authors.robot,
            id: uuid()
        };
        timeout=setTimeout(()=>dispatch(addMessagesAction(id,botMessage)),2000)

    }
}