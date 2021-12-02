import {ADD_LISTCHAT_ACTION, DELETE_LISTCHAT_ACTION, SET_CHATS_ACTION} from "./actions";

const listChatState=[
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
]

export const listChatReducer=(state=listChatState,{type,payload})=>{
 switch(type){
     case ADD_LISTCHAT_ACTION:
         return [...state,payload];
     case DELETE_LISTCHAT_ACTION:
         return state.filter(({id}) => id !==payload);
     case SET_CHATS_ACTION:
        return payload
    default:
    return state;
 }
};