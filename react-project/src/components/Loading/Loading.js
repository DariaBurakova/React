import { useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectLoading, selectStatusFaiLure, selectStatusRequest} from "../../store/loading/selector";
import {loadingArticlesThunk} from "../../store/loading/action";

export const Loading=()=>{
    const dispatch=useDispatch()
    const articles=useSelector(selectLoading)
    const request=useSelector(selectStatusRequest)
    const error=useSelector(selectStatusFaiLure)
    const loadingArticles = async ()=> {
        dispatch(loadingArticlesThunk())
    }
 const handlerLoading=()=>{
     loadingArticles();
 }
useEffect(()=>{
        loadingArticles();
    },[]);
    return(
        <div className="container" style={{width:"450px",margin:"50px auto"}}>

        <h3 className="text-center">List of profile</h3>
            {request && <span className="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>}
            {error&&<div>
                <h3>ERROR{error}</h3>
                <button className="btn btn-outline-secondary" onClick={handlerLoading}>Reload</button>
            </div>}
            <ul className="" >
            {articles.map((item)=><li key={item.id}>{item.name }, Email: {item.email} </li>)}
                </ul>
        </div>
    )
}
