import React from 'react';
import './Message.css'
function Message(props){

  return(
      <div>
<button className="buttonClick" onClick={props.onClick}>Сlick on me</button>
    </div>
  );
}

export default Message;