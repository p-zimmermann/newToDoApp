import React, {useRef} from 'react';
import { useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';

const Input = ({todos, setTodos}) => {
    
    useEffect(() => {
        console.log = `follwing list items: ${todos}`
    })

    const addTodo = () => {
        setTodos([...todos, {
            text: todoNameRef.current.value,
            id: uuidv4()
        }])
    }   
    const todoNameRef = useRef("");
    return(
        <div>
            <input ref={todoNameRef} type="text"></input>
            <button onClick ={addTodo}className="button">Submit</button>
        </div>
    )
}

export default Input;