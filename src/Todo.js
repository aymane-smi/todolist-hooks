//component
import React, {useContext, memo} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction  from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import useToggle from './hooks/useToggle';
import EditForm from './EditForm';
import { ReduceContext } from './context/todos.context';

function Todo({task, completed, id}){
    const dispatch = useContext(ReduceContext);
    const [isEditing, toggle] = useToggle(true);
    return (
        <ListItem style={{height: "64px"}}>
            {
                isEditing ? (
                    <>
                    <CheckBox tabIndex={-1} checked={completed} onClick={()=>{ dispatch({type: "TOGGLE", id: id}) }}/>
                    <ListItemText style={{textDecoration: completed? "line-through": "none"}}>{task}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton>
                            <Delete aria-label="delete" onClick={()=>{dispatch({type: "REMOVE", id: id})}}/>
                        </IconButton>
                        <IconButton>
                            <Edit aria-label="edit" onClick={()=>toggle()}/>
                        </IconButton>
                    </ListItemSecondaryAction>
                    </>
                ):(<EditForm
                    task={task}
                    toggle={toggle}
                    id={id}
                />)
            }
        </ListItem>
    );
}
export default memo(Todo);