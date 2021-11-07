import React from 'react';
import './Message.css'

export const MessageList=(props)=> {
    return (
        <div>
        {props.messageList.map((item) => (
            <div key={item.id} className="contentMessage  px-5">
                <div className="answerMessage  row gx-5">
                    <div  className="main-answer  border border-info rounded-pill  opacity-75" >{item.text} {item.author}</div>
                </div>
            </div>
        ))}
    </div>
    );
};


