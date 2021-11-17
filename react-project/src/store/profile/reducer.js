 import {CHECKBOX_ACTION} from "./actions"

const profileState={
    checkbox:false,
     name:'Сlick on me',

 }

export const profileReducer=(state=profileState,action)=>{
    switch (action.type){
        case CHECKBOX_ACTION:
            return{
                ...state,
              checkbox:!state.checkbox
            }
        default:
            return state
    }
}
