export const DELETE_LISTCHAT_ACTION="LISTCHAT::DELETE_LISTCHAT_ACTION";
export const ADD_LISTCHAT_ACTION="LISTCHAT::ADD_LISTCHAT_ACTION";

export const deleteListChatAction=(id)=>({
    type:DELETE_LISTCHAT_ACTION,
    payload:id,
})
export const addListChatAction=(name)=>({
    type:ADD_LISTCHAT_ACTION,
    payload:name,
})