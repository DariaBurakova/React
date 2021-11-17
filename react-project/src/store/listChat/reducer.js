import {ADD_LISTCHAT_ACTION, DELETE_LISTCHAT_ACTION} from "./actions";

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
    default:
    return state;
 }
};