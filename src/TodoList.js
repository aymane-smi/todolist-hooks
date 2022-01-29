//component
import React, {useContext, useReducer} from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';
import {TodosContext} from './context/todos.context';

function TodoList(){
    const todos = useContext(TodosContext);
    const n = todos.length;
    if(n != 0){
        return (<Paper>
            <List>
                {todos.map((todo, i) =>(
                    <>
                    <Todo {...todo}
                          id={todo.id}
                          key={i}
                          />
                    {i < n-1 && <Divider />}
                    </>
                ))}
            </List>
        </Paper>);
    }
    return null;
}
export default TodoList;