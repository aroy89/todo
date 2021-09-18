import React from 'react';

const Todo = ({todo, todos, setTodos}) =>{

    const deleteHandler = (event) =>{
        setTodos(todos.filter( (item) =>  item._id !== todo._id));
    }
    const completeHandler = (event) =>{
        setTodos(
            todos.map( item => {
                if(item._id === todo._id){
                    return{
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
            }))
    }
    return(
        <>
            <li className="list">
                <button onClick={completeHandler}>O</button>
                <label className={`${todo.completed ? "completed" : ""}`}>{todo.text}</label>
                <button onClick={deleteHandler}>X</button>
            </li>
        </>
    )
}

export default Todo;