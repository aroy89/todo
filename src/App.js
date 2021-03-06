import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './todo/Form';
import TodoList from './todo/TodoList';

function App() {

  // use State
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // use Effect run once
  useEffect(()=>{
    getLocalTodos();    
  }, []);
  // use Effect
  useEffect(()=>{
    filteredHandler();
    saveLocalTodos();
  }, [todos, status])

 const filteredHandler = () =>{
   switch(status)
   {
      case 'completed':
        setFilteredTodos(todos.filter( items => items.completed === true ))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter( items => items.completed === false ))
        break;
      default:
        setFilteredTodos(todos);
        break;
   }
 }
  // Save todo list into the local storage
  const saveLocalTodos = ()=> {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  // Get todo list from the local storage
  const getLocalTodos = () => {
  if(localStorage.getItem("todos") === null)
  {
      localStorage.setItem("todos", JSON.stringify([]));
  }
  else
  {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      console.log(localTodos);
      setTodos(localTodos);
  }
  }
  return (
    <div className="flex-container">
      <header className="flex-item flex-header">
        <h1>ROY TODO LIST</h1>
      </header>
      
      <div className="flex-item flex-form">
      <Form 
        input={input} 
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        // setFilteredTodos={setFilteredTodos}
        />
      </div>
      <div className="flex-item flex-todo-list">
        <TodoList 
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </div>
      
    </div>
  );
}

export default App;
