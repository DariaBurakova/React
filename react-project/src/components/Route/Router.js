import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Home} from "../Home";
import {SelectChat} from "../SelectChat/SelectChat";
import Chats from "../Chats/Chats";
import {ConnectedProfile} from "../Profile";
import {Page404} from "../Page404";
import React, {useEffect, useState} from "react";
import "./router.css"
import {Loading} from "../Loading/Loading";
import {PublicRouter} from "../PublicRouter/publicRouter";
import {PrivateRouter} from "../PrivateRouter/privateRouter";
import {SignUp} from "../SignUp/signup";
import {auth} from "../../services/firebase";
import {useDispatch} from "react-redux";
import {signInAction, signOutAction} from "../../store/profile/actions";

import {initMessageThunk} from "../../store/chats/actions";


export const Router=()=> {
    const dispatch=useDispatch()
    useEffect(()=>{
    const unsubscribe= auth.onAuthStateChanged((user)=>{
if(user){
    dispatch(signInAction())
}else{
    dispatch(signOutAction())
}
        })
        return unsubscribe
    },[])
   useEffect(()=>{
        dispatch(initMessageThunk())
    },[])
    return(
        <BrowserRouter>
            <div className="lead nav justify-content-center bg-black text-white bg-opacity-75">
                <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/chats">Chats</Link>
                </li>
                <li className="nav-item"><Link className="nav-link text-white" to="/profile">Profile</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/loading">Loading</Link></li>
            </div>

            <Routes>
                <Route path="/" element={<PublicRouter><Home/></PublicRouter>}/>
                <Route path="chats" >
                    <Route index element={<PrivateRouter><SelectChat/></PrivateRouter>} />
                    <Route path=":id" element={<PrivateRouter><Chats/></PrivateRouter>}/>
                </Route>
                <Route path="/signUp" element={<PublicRouter><SignUp/></PublicRouter>}/>
                <Route path="profile" element={<PrivateRouter><ConnectedProfile/></PrivateRouter>}/>
                <Route path="loading" element={<Loading/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </BrowserRouter>
    )
 }

