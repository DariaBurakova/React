import React, {useEffect, useState} from "react";
import {checkboxAction,changeNameAction} from "../store/profile/actions";
import {connect, useSelector,shallowEqual} from "react-redux";
import {logOut, userRef} from "../services/firebase";
import { onValue, set } from "firebase/database";
import {selectName} from "../store/profile/selector";
export const Profile=({setName,checkboxChange,changeBox})=>{
    const name =useSelector(selectName,shallowEqual )
    const [value, setValue] = useState(name);
    useEffect(()=>{
      const unsubscribe=onValue(userRef,(snapshot)=>{
            const userData=snapshot.val();
            setName(userData?.name || "")
        })
        return unsubscribe

    },[setName])
    const handlerChange=()=>{
        changeBox()
    }
    const handleChangeText = (e) => {
        setValue(e.target.value);

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        set(userRef,{
            name:value,
        })
    };
    const handlerClickOut=async ()=>{
        try{
            await logOut()
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div className="d-flex flex-column " style={{width:'800px',margin:'50px auto'}}>
        <h1 className="">Profile</h1>
            <div className="form-check">
        <input type="checkbox" className="form-check-input " checked={checkboxChange} onChange={handlerChange}/>
            </div>
            <form className="input-group  mb-3" style={{width:'350px'}} onSubmit={handleSubmit}>
                <input type="text" className="form-control"  value={value} onChange={handleChangeText} />
                <input type="submit" className="btn btn-outline-secondary"/>
            </form>
            <div>
                <button onClick={handlerClickOut} className="btn btn-outline-secondary">Sign out</button>

            </div>
        </div>
    )
}
const mapStateToProps=(state)=>({
    name:state.profile.name,
    checkboxChange:state.profile.checkbox})
const mapDispatchToProps=(dispatch)=>({
    changeBox:()=>dispatch(checkboxAction),
    setName:(newName) => dispatch(changeNameAction(newName))

})


export const ConnectedProfile=connect(mapStateToProps,mapDispatchToProps)(Profile);