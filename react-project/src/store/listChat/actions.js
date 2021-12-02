import {onValue,set} from "firebase/database";
import {chatsRef, getChatMessageRefById, getChatRefById} from "../../services/firebase";

export const DELETE_LISTCHAT_ACTION="LISTCHAT::DELETE_LISTCHAT_ACTION";
export const ADD_LISTCHAT_ACTION="LISTCHAT::ADD_LISTCHAT_ACTION";
export const SET_CHATS_ACTION="LISTCHAT::SET_CHATS_ACTION";

export const deleteListChatAction=(id)=>({
    type:DELETE_LISTCHAT_ACTION,
    payload:id,
})
export const addListChatAction=(name)=>({
    type:ADD_LISTCHAT_ACTION,
    payload:name,
})
export const setChatsAction=(chats)=>({
    type:SET_CHATS_ACTION,
    payload:chats
})
export const initChatsThunk=()=>(dispatch)=>{
    onValue(chatsRef,(snapshot) => {
        const newChats=[]
        snapshot.forEach((item)=>{
            newChats.push(item.val())
        })
        dispatch(setChatsAction(newChats))
    })
}
export const addChatsThunk=(newChat)=>(dispatch)=>{
    set(getChatMessageRefById(newChat.id),{empry:true})
    set(getChatRefById(newChat.id),newChat)
}
export const deletChatsThunk=(id)=>(dispatch)=>{
    set(getChatMessageRefById(id),{empry:false})
    set(getChatRefById(id),null)
}