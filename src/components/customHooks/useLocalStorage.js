import { useState, useEffect } from "react";


export default function(keyVal){
    const[todos, setTodos] = useState([])
    const[count, setCount] = useState()

    if (localStorage.getItem(keyVal) === null){
        window.localStorage.setItem("myTodos", JSON.stringify(todos))
    }
    else{
        //load todos from local storage
        useEffect(()=>{
            JSON.parse(localStorage.getItem(keyVal))
        })
    }

    window.addEventListener('load',() => {
        setCount(todos.length); 
    })

/*     useEffect(() => {
        if(count < 4 || !localStorage.getItem(keyVal)) {
            //from object to string to set item
            localStorage.setItem(keyVal,JSON.stringify(todos));
            setCount(todos.length)
            console.log(localStorage,count);
        }
    }, [todos,keyVal,count])

    useEffect(() => {
        const todosStore = localStorage.getItems(keyVal);
        setTodos(todosStore)
    },[keyVal])

    const removeTodoFromStorage = (todosNew) => {
        localStorage.setItem(keyVal,JSON.stringify(todosNew))
    }


    return [todos,setTodos,removeTodoFromStorage]; */
}