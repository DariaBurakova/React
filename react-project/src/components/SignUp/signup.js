import {FormService} from "../FormService/formservice";
import {Link} from "react-router-dom";
import {signUp} from "../../services/firebase";
import {useState} from "react";

export  const SignUp=()=>{
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(false)
    const handlerSignUp = async (email,password) => {
        setLoading(true)
try{
    await signUp(email,password)
}catch(err){
    console.log(err)
    setError(err.message)
}finally {
    setLoading(false)
}
    }
    return(
        <div className="d-flex flex-column align-items-center" style={{width:"400px",margin:"0 auto"}}>

        <FormService onSubmit={handlerSignUp} error={error} loading={loading}/>
            <Link className="btn btn-outline-secondary" to="/">Sign In</Link>
        </div>
    )
}