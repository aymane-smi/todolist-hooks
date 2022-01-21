//component
import React from 'react';
import { TextField } from '@material-ui/core';
import useInputState from './hooks/useInputState';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import ListItemSecondaryAction  from '@material-ui/core/ListItemSecondaryAction';

function EditForm({task, editTodo, id, toggle}){
    console.log(task);
    const [value_, handleChange, reset] = useInputState(task);
    const handleSubmit = (evt)=>{
        evt.preventDefault();
        editTodo(id, value_);
        reset();
        toggle();
    }
    const handleQuit = ()=>{
        reset();
        toggle();
    }
    return (
        <form onSubmit={handleSubmit}
              style={{marginLeft: "1rem", width: "100%"}}
        >
            <TextField
                value={value_}
                onChange={handleChange}
                style={{width: "90%"}}
                autoFocus
            >
            </TextField>
            <ListItemSecondaryAction>
                <IconButton>
                    <Close aria-label="delete" onClick={handleQuit}/>
                </IconButton>
            </ListItemSecondaryAction>

        </form>
    );
}
export default EditForm;