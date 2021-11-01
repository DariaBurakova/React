import React, {useState} from 'react';
import './Form.css';
export function Form(props){
    const [value, setValue] = useState('');
    const[author,setAuthor]=useState('user')
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setValue('')
    }

    return(
        <form className='formChat'onSubmit={handleSubmit}  >
            <input className="textChat" value={value} type="text" onChange={handleChange} />
            <button className="formButton" onClick={()=>props.changeText(value,author)} >Отправить</button>
        </form>
    )
}