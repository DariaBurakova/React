import React from 'react';
import './Message.css'

export const MessageList=({messageList})=> {
    return (
            <div>
                {messageList.map((item) => (
                    <div className="contentMessage  px-5">
                        <div className="answerMessage  row gx-5">
                            <div key={item.id}  className="main-answer  border border-info rounded-pill  opacity-75" >{item.text} {item.author}</div>

                        </div>
                    </div>
                        ))}
            </div>
            )
};
