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
            <div className="flex-list">
                <button className="todo-complete" onClick={completeHandler}>
                <i class="far fa-check-square"></i>
                </button>
                <label className={`todo-text ${todo.completed ? "completed" : ""}`}>{todo.text}</label>
                <button className="todo-delete" onClick={deleteHandler}>
                <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </>
    )
}

export default Todo;