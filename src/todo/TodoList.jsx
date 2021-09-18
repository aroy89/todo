import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos }) =>{
    return(
        <div className="todolist">
                {
                    filteredTodos.map( todo => {
                        return (
                        <Todo 
                            setTodos={setTodos}
                            todos={todos}
                            todo={todo}
                            key={todo._id}
                        />
                        )
                    })
                }
                
        </div>
    )
}


export default TodoList;