import { IToDo } from "../ToDoList/ToDoList";
import { FC } from "react";
import { TextField, Checkbox, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

interface ITodoItem extends IToDo {
  removeTodo: (id: number) => any;
  toggleTodo: (id: number) => any;
  handleClick: (id: number) => any;
}

const ToDoItem: FC<ITodoItem> = ({id, title, complete, dueDate, removeTodo, toggleTodo, handleClick}) => {

  return (
    <>
      <TextField
        helperText={"Completion Date: " + dueDate.toString().substring(0, 10)}
        value={title}
        inputProps={{
          style: {
            width: 200,
            height: 5,
            fontFamily: "arial",
            color: "black",
          },
        }}
        focused
        margin="dense"
      />
      <Checkbox
        id="check"
        checked={complete}
        onChange={toggleTodo(id)}
        onClick={handleClick(id)}
      />
      <IconButton aria-label="delete" onClick={removeTodo(id)}>
        <DeleteIcon />
      </IconButton>
    </>
  );
};

export { ToDoItem };
