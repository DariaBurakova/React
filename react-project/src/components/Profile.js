import React from "react";
import {checkboxAction} from "../store/profile/actions";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

export const Profile=()=>{
    const checkbox=useSelector((state)=>state.checkbox)
    const name=useSelector((state)=>state.name)
    const dispatch=useDispatch()
    const handlerChange=()=>{
        dispatch(checkboxAction)
    }
    return(
        <div className="container">
        <h1>Profile</h1>
        <input type="checkbox" checked={checkbox} onChange={handlerChange}/>
            <div>{name}</div>
        </div>
    )
}