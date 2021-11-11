import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import './App.css';
import Chats from "./components/Chats";
import {SelectChat} from "./components/SelectChat";
import {Page404} from "./components/Page404";
import {Home} from "./components/Home"



function App() {
  return (
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
            <Route path="/chats" >
                <Route index element={<SelectChat/>} />
                <Route path=":id" element={<Chats/>}/>
            </Route>
            <Route path="*" element={<Page404/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
