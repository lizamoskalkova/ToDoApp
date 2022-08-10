import { IToDo } from "../ToDoList/ToDoList";
import { FC } from "react";
import { TextField, Checkbox, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface ITodoItem extends IToDo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  handleClick: (id: number) => void;
}

const ToDoItem = ({ title, dueDate }) => {
  return (
    <>
      <TextField
        helperText={"Completion Date: " + String(dueDate).substring(0, 10)}
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
        //checked={complete}
        //onChange={() => toggleTodo(id)}
        //onClick={() => handleClick(id)}
      />
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </>
  );
};

export { ToDoItem };
