
 export const CHECKBOX_ACTION="PROFILE::CHECKBOX_ACTION"
 export const CHANGE_NAME_ACTION="PROFILE::CHANGE_NAME_ACTION"
 export const SIGN_IN_ACTION="PROFILE::SIGN_IN_ACTION"
 export const SIGN_OUT_ACTION="PROFILE::SIGN_OUT_ACTION"

export const checkboxAction={
    type:CHECKBOX_ACTION
}
 export const changeNameAction = (name) => ({
     type: CHANGE_NAME_ACTION,
     payload: name,
 });
export const signInAction=()=>({
    type:SIGN_IN_ACTION,
})

 export const signOutAction=()=>({
     type:SIGN_OUT_ACTION,
 })
