//component
import React, {useState, useEffect} from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTodo from './hooks/useTodo';
function TodoApp(){
    const IntitalTodos = (JSON.parse(window.localStorage.getItem("todos")) || "[]");
    // const todos_ = [{id: uuid(), task:"todo1", completed: false},
    //                   {id: uuid(), task:"todo2", completed: true},
    //                   {id: uuid(), task:"todo3", complete: false}
    //                 ];
    const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodo(IntitalTodos);
    useEffect(()=>{
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    return (
        <Paper style={{
                    padding:0,
                    margin:0,
                    height: "100vh",
                    backgroundColor: "#fafafa"
                }}
                elevation={0}
        >
        <AppBar color="primary" position="static" style={{height: "64px"}}>
                <Toolbar>
                    <Typography color='inherit'>TodoApp</Typography>
                </Toolbar>
        </AppBar>
        <Grid container justifyContent='center' style={{marginTop:"1rem"}}>
            <Grid item xs={11} md={8} lg={4}>
                <TodoForm addTodo={addTodo}/>
                <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
            </Grid>
        </Grid>
        </Paper>
    )
}   
export default TodoApp