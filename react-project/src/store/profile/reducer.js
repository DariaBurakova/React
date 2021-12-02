 import {CHANGE_NAME_ACTION, CHECKBOX_ACTION, SIGN_IN_ACTION, SIGN_OUT_ACTION} from "./actions"

const profileState={
    checkbox:false,
     name:'Default name',
    authed:false,

 }

export const profileReducer=(state=profileState,action)=>{
    switch (action.type){
        case CHECKBOX_ACTION:
            return{
                ...state,
              checkbox:!state.checkbox
            }
        case CHANGE_NAME_ACTION:
            return {
                ...state,
                name: action.payload,
            };
        case SIGN_IN_ACTION:
            return {
                ...state,
                authed: true,
            }
        case SIGN_OUT_ACTION:
            return {
                ...state,
                authed: false,
            }
        default:
            return state
    }
}
