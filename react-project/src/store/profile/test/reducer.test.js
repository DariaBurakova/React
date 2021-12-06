
import {CHANGE_NAME_ACTION, CHECKBOX_ACTION, SIGN_IN_ACTION, SIGN_OUT_ACTION} from "../actions";
import {profileReducer} from "../reducer";

describe('checkbox',()=>{
    it("return checkbox",()=>{
        const profileState={
            checkbox:false
        };
        const action={
            type:CHECKBOX_ACTION,
        }
        expect(profileReducer(profileState,action)).toEqual({
            ...profileState,
            checkbox:!profileState.checkbox
        })
    })
})
describe('sing in Action',()=>{
    it("return sing in",()=>{
        const profileState={
            authed:false
        };
        const action={
            type:SIGN_IN_ACTION
        }
        expect(profileReducer(profileState,action)).toEqual({
            ...profileState,
            authed: true,
        })
    })
})
describe('sing out Action',()=>{
    it("return sing out",()=>{
        const profileState={
            authed:true
        };
        const action={
            type:SIGN_OUT_ACTION
        }
        expect(profileReducer(profileState,action)).toEqual({
            ...profileState,
            authed: false,
        })
    })
})
describe('Change name',()=>{
    it("return new name",()=>{
        const profileState={
            name:'Default name'
        };
        const action={
            type:CHANGE_NAME_ACTION,
            payload:name
        }
        expect(profileReducer(profileState,action)).toEqual({
            ...profileState,
            name: action.payload
        })
    })
})