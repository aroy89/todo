import React from 'react';

         
const Form = ({input, setInput, todos, setTodos, setStatus}) => {

    const todoInputHandler = (event) =>{
        setInput(event.target.value);
    }
    const todoAddHandler = (event) => {
        event.preventDefault();
        setTodos([
            ...todos, 
            {
                _id: Math.floor(Math.random() * 10000),
                text: input, 
                completed: false, 
            }
        ]);
        setInput("");
        // document.getElementById('form').value = '';
    }

    const statusHandler = (event) =>{
        // console.log(event.target.value);
        setStatus(event.target.value);
    }
    return (
        <div className="form">
            <input value={input} onChange={todoInputHandler} type="text" name="form" id="form"/>
            <button onClick={todoAddHandler} name="add">Add</button>
            <select className="status" onChange={statusHandler}>
                <option value='all'>All</option>
                <option value='completed'>Completed</option>
                <option value='uncompleted'>Uncompleted</option>
            </select>
        </div>
       
    );
}

export default Form;