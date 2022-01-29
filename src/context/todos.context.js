import React, {createContext, useEffect, useReducer} from 'react';
import reducer from '../reducer/todos.reducer';
import useTodo from '../hooks/useTodo';
export const TodosContext = createContext();
export const ReduceContext = createContext();

export function TodosProvider(props){
    const IntitalTodos = (JSON.parse(window.localStorage.getItem("todos")) || "[]");
    // const todoStuff = useTodo(IntitalTodos);
    const [todos, dispatch] = useReducer(reducer, IntitalTodos);
    useEffect(()=>{
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    return (<TodosContext.Provider value={todos}>
        <ReduceContext.Provider value={dispatch}>
            {props.children}
        </ReduceContext.Provider>
    </TodosContext.Provider>);
}