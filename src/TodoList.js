//component
import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';
function TodoList(props){
    return (<Paper>
        <List>
            {props.todos.map((todo) =>(
                <>
                <Todo task={todo.task} 
                      key={todo.id}
                      id={todo.id}
                      completed={todo.completed}
                      removeTodo={props.removeTodo}
                      toggleTodo={props.toggleTodo}
                      editTodo={props.editTodo}
                      />
                <Divider />
                </>
            ))}
        </List>
    </Paper>);
}
export default TodoList;