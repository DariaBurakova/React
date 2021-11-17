import React from "react";
import {checkboxAction} from "../store/profile/actions";
import {connect} from "react-redux";
import {useDispatch} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
export const Profile=({name,checkboxChange,changeBox})=>{
   // const checkbox=useSelector((state)=>state.profile.checkbox)
    //const name=useSelector((state)=>state.profile.name)
    const mapStateToProps=(state)=>({
        name:state.profile.name,
        checkboxChange:state.profile.checkbox})
  const mapDispatchToProps=(dispatch)=>({
  changeBox:()=>dispatch(checkboxAction)
    })
   // const dispatch=useDispatch()
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
export const ConnectedProfile=connect(mapStateToProps,mapDispatchToProps)(Profile);