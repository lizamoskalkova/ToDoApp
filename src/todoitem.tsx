import { ITodo } from "./data";
import { FC } from "react";
import { TextField, Checkbox } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon  from '@mui/icons-material/Delete';

interface ITodoItem extends ITodo {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;

}
const ToDoItem: FC<ITodoItem> = (props) => {
    const {id, title,complete, removeTodo, toggleTodo} = props;
    return <div>
        <Checkbox id = "check" checked = {complete} onChange={() => toggleTodo(id)} />
        <TextField 
            defaultValue={title} 
            inputProps={{ 
                style: { 
                    width: 300, 
                    height: 5, 
                    fontFamily: 'arial', 
                    color: 'black'}}} 
            focused margin="dense" /> 
        <IconButton aria-label="delete" onClick = {() => removeTodo(id)}>
            <DeleteIcon /></IconButton>
    </div> 
}

export {ToDoItem}