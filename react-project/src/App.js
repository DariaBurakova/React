
import './App.css';
import {useEffect, useState} from "react";
import {Form} from "./components/Form";

const text=[
    {text:'', author:''}
];

function App() {
    const [messageList,setMessageList]=useState(text);

    useEffect(()=>{
      setTimeout(()=>{
return setMessageList(messageList.map(item=>{
    if(item.author==='user'){
   return {
       text: 'How are you?',
       author: 'robot'
   }
    }else{
        return{
            text:'',
            author: ''
        }
    }
})
)},2000)
  },[changeText])

function changeText(value,author){
    return setMessageList( messageList.map(item=>{
        if(author==='user') {
            return {
                text: value,
                author: author
            }
        }
    })
    )
}
  return (
    <div className="App">
     <header >
      </header>
        <main className="main-app">
                <Form changeText={changeText}/>
            {messageList.map((item)=>{
               return (<div className="main-answer">
                   {item.text} <br/>
                   {item.author}
            </div>)})}
        </main>
    </div>
  );
}

export default App;
