//component
import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
function TodoForm({addTodo}){
    const [value_, handleChange, reset] = useInputState("");
    const handleSubmit = evt =>{
        evt.preventDefault();
        addTodo(value_);
        reset();
    }
    return (<Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
        <form onSubmit={handleSubmit}>
            <TextField value={value_}
                       onChange={handleChange}
                       fullWidth
                       margin="normal"
                       label="add new todo"
                       />
        </form>
    </Paper>);
}
export default TodoForm;