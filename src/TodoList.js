//component
import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';
function TodoList(props){
    const n = props.todos.length
    console.log(props.todos);
    if(props.todos.length >0){
        return (<Paper>
            <List>
                {props.todos.map((todo, i) =>(
                    <>
                    {console.log(todo.task)}
                    <Todo {...todo}
                          id={todo.id}
                          removeTodo={props.removeTodo}
                          toggleTodo={props.toggleTodo}
                          editTodo={props.editTodo}
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