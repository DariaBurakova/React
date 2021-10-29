
import './App.css';
import Message from "./components/Message";
import {useState} from "react";



function App({name}) {
    const [text,setText]=useState('I am glad to see you');
    const handleClick=()=>{
       alert(text)
    }
  return (
    <div className="App">
      <header className="App-header">
          <h3 className='heading'>Hello,my name is {name}</h3>
          <Message onClick={handleClick}/>
      </header>

    </div>
  );
}

export default App;
