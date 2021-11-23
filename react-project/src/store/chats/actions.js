import {Authors} from "../../utils/variable";
import uuid from "uuid/dist/v4";

export  const ADD_MESSAGES_ACTION="CHATS::ADD_MESSAGES_ACTION";
export  const ADD_MESSAGES_LISTCHAT_ACTION="CHATS::ADD_MESSAGES_LISTCHAT_ACTION";

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