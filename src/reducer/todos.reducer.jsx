import {useReducer} from 'react';
import {v4 as uuid} from 'uuid';
export default function reducer(state, action){
    switch(action.type){
        case "ADD":
            return ([...state, {id: uuid(), task : action.task, completed: false}]);
        case "REMOVE":
            return state.filter(todo => todo.id !== action.id);
        case "TOGGLE":
            return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo);
        case "EDIT":
            return state.map(todo => todo.id === action.id ? {...state, task: action.task} : todo);
        default:
            return state;
    }
}
