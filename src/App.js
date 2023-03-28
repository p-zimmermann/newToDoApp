import './App.css';
import Header from './components/Header';
import List from './components/List';
import Input from './components/Input';
import VL1603 from './components/VL1603-test';
import TestHeading from './components/TestHeading';
import {v4 as uuidv4} from 'uuid';
import {useState, useEffect} from 'react';

import useLocalStorage from './components/customHooks/useLocalStorage';
import env from "react-dotenv";


const todoObject = [
  {
    text: "Einkaufen",
    id: uuidv4(),
    done: false
  },
  {
    text: "Lesen",
    id: uuidv4(),
    done: false
  }
]

/* window.localStorage.setItem("myTodos", JSON.stringify(todoObject))
console.log(JSON.parse(window.localStorage.getItem("myTodos"))); */

function App() {

  const[todos, setTodos] = useState([]);
 
  const saveTodos = todoArray => {
   
    window.localStorage.setItem("myTodos", JSON.stringify(todoArray));
  }
  const loadTodosFromLocalStorage = () => {
   
    if (localStorage.getItem("myTodos") !== null) 
      return JSON.parse(localStorage.getItem("myTodos"));
    else return [];
  }
  // UseEffects
  useEffect(() => {
    if (todos) saveTodos(todos);
  }, [todos]);

  useEffect(() => {
    const storage = loadTodosFromLocalStorage();
    //console.log(storage);
    setTodos(storage);
  }, []);
/* 
  useEffect(() => {
    window.addEventListener("load", (e)=>{
      e.preventDefault()
      const storage = loadTodosFromLocalStorage();
      setTodos(storage);
    })
  }) */

  return (
    <div className="App">
      {/* children beispiel */}
      <VL1603 onSmash={() => alert("clicked")}>
        Click
      </VL1603>
      <Header title="To-Do App"/>
      <List item={todos} setTodos={setTodos}/>
      <Input todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App;
