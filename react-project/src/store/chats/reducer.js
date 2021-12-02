import {Authors} from "../../utils/variable";
import {ADD_MESSAGES_ACTION, ADD_MESSAGES_LISTCHAT_ACTION, SET_MESSAGES_ACTION} from "./actions";


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

export const chatsStateReducer=(state=chatsState,{type,payload,idChats,})=>{
    switch (type){
        case ADD_MESSAGES_ACTION:
            return {...state,[payload.id]:[...state[payload.id],payload.messageList]}
        case ADD_MESSAGES_LISTCHAT_ACTION:
            return {...state,[idChats]:[]}
        case SET_MESSAGES_ACTION:
            return payload
        default:
            return state;
    }
}