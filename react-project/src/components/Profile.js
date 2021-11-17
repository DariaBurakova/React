import React from "react";
import {checkboxAction} from "../store/profile/actions";
import {connect} from "react-redux";
export const Profile=({name,checkboxChange,changeBox})=>{
    const handlerChange=()=>{
        changeBox()
    }
    return(
        <div className="container">
        <h1>Profile</h1>
        <input type="checkbox" checked={checkboxChange} onChange={handlerChange}/>
            <div>{name}</div>
        </div>
    )
}
const mapStateToProps=(state)=>({
    name:state.profile.name,
    checkboxChange:state.profile.checkbox})
const mapDispatchToProps=(dispatch)=>({
    changeBox:()=>dispatch(checkboxAction)
})
export const ConnectedProfile=connect(mapStateToProps,mapDispatchToProps)(Profile);