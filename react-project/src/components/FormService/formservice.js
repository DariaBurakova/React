import {useState} from "react";

export const FormService=({onSubmit,error,loading})=>{
const [email,setEmail]=useState('');
const [password,setPassword]=useState('')
    const handlerChangeEmail=(e)=>{
    setEmail(e.target.value)
    }
    const handlerChangePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handlerSubmit=(e)=>{
    e.preventDefault();
    onSubmit(email,password)
        setEmail('')
        setPassword('')
    }
    return(
        <div className="" style={{width:"200px",margin:"50px auto"}}>
           <form className="" onSubmit={handlerSubmit}>
               <div className="input-group  mb-3" >
               <input type="text" className="form-control" placeholder="Email"  value={email} onChange={handlerChangeEmail}/>
               </div>
               <div className="input-group  mb-3">
               <input type="password" className="form-control"  placeholder="Password" value={password} onChange={handlerChangePassword}/>
               </div>

                   <input type="submit" className="btn btn-outline-secondary" disabled={loading}/>
           </form>
            {error &&<h3>{error}</h3>}
        </div>
    )
}