import {Authors} from "../../utils/variable";
import {ADD_MESSAGES_ACTION, ADD_MESSAGES_LISTCHAT_ACTION, DELETE_MESSAGES_ACTION} from "./actions";


const chatsState={
    chat1: [
        {text: '1', author:Authors.user,},
    ],
    chat2: [
        {text: '2', author:Authors.user,},
    ],
    chat3: [
        {text: '3', author:Authors.user,},
    ]
};

export const chatsStateReducer=(state=chatsState,{type,value,id,idChats})=>{
    switch (type){
        case ADD_MESSAGES_ACTION:
            return {...state,[id]:[...state[id],value]}
        case ADD_MESSAGES_LISTCHAT_ACTION:
            return {...state,[idChats]:[]}
        default:
            return state;
    }
}