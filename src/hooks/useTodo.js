import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';

function useTodo(todos_){
    const [todos, setState] = useState(todos_);
    return {
        todos,
        addTodo : newTodo =>{
            setState([...todos, {id: uuid(), task:newTodo, completed: false}]);
        },
        removeTodo : (id)=>{
            const updatedTodos = todos.filter(todo => todo.id !== id);
            setState(updatedTodos);
        },
        toggleTodo : (id)=>{
            const updatedTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
            setState(updatedTodos);
        },
        editTodo : (id, newTask) =>{
            const updatedTodos = todos.map(todo => todo.id === id ? {...todo, task: newTask} : todo);
            setState(updatedTodos);
        }
    }
}
export default useTodo;