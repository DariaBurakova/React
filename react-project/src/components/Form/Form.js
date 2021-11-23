import React, {useEffect, useRef, useState} from 'react';
import './Form.css';
import {Authors} from "../../utils/variable";
import uuid from 'uuid/dist/v4';

export function Form(props){
    const [value, setValue] = useState('');
    const inputRef = useRef(null);
    useEffect( () => {
        inputRef.current.focus()
    },[])
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.onSendMessage({
            text: value,
            author: Authors.user,
            id: uuid()
        });
        setValue('')
    }

    return(
        <form className="formChat rounded " onSubmit={handleSubmit}  >
            <div className="">
            <input className="textChat " ref={inputRef} value={value} type="text" onChange={handleChange} />
            <button className="btn btn-light border  opacity-100 rounded-end" >
                &#8689;</button>
            </div>
        </form>
    )

}