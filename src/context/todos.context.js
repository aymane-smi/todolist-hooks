import React, {createContext, useEffect} from 'react';
import useTodo from '../hooks/useTodo';
export const TodosContext = createContext();

export function TodosProvider(props){
    const IntitalTodos = (JSON.parse(window.localStorage.getItem("todos")) || "[]");
    const todoStuff = useTodo(IntitalTodos);
    useEffect(()=>{
        window.localStorage.setItem("todos", JSON.stringify(todoStuff.todos));
    }, [todoStuff.todos]);
    return (<TodosContext.Provider value={todoStuff}>
        {props.children}
    </TodosContext.Provider>);
}