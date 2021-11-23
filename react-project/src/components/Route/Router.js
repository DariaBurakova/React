import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Home} from "../Home";
import {SelectChat} from "../SelectChat/SelectChat";
import Chats from "../Chats/Chats";
import {ConnectedProfile} from "../Profile";
import {Page404} from "../Page404";
import React from "react";
import "./router.css"

export const Router=()=>{
    return(
        <BrowserRouter>
            <div className="lead nav justify-content-center bg-black text-white bg-opacity-75">
                <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/chats">Chats</Link>
                </li>
                <li className="nav-item"><Link className="nav-link text-white" to="/profile">Profile</Link></li>
            </div>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="chats" >
                    <Route index element={<SelectChat/>} />
                    <Route path=":id" element={<Chats/>}/>
                </Route>
                <Route path="profile" element={<ConnectedProfile/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </BrowserRouter>
    )
 }

