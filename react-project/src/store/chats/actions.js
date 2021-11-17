
export  const ADD_MESSAGES_ACTION="CHATS::ADD_MESSAGES_ACTION";
export  const ADD_MESSAGES_LISTCHAT_ACTION="CHATS::ADD_MESSAGES_LISTCHAT_ACTION";

export const addMessagesAction=(value,id)=>({
   type:ADD_MESSAGES_ACTION,
    value:value,
    id:id

})
export const addMessagesListChatAction=(id)=>({
    type:ADD_MESSAGES_LISTCHAT_ACTION,
    idChats:id
})