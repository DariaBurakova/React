import React from "react";
import {ListChat} from "../ListChat/ListChat";
import "./SelectChat.css"

export const SelectChat=()=>{
    return(
        <div className="selectCard" >
            <h2 className=" text-center">Select Chat</h2>
            <div className="selectChat">
            <ListChat/>
            </div>
        </div>
    )
}