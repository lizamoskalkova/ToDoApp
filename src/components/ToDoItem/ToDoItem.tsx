import { TextField, Checkbox, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../Store/todoSlice";

const ToDoItem = ({ id, title, complete, dueDate }) => {
  const dispatch = useDispatch();
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
        checked={complete}
        onChange={() => dispatch(toggleTodo({id}))}
        //onClick={() => handleClick(id)}
      />
      <IconButton aria-label="delete" onClick = {()=>dispatch(removeTodo({id}))}>
        <DeleteIcon />
      </IconButton>
    </>
  );
};

export { ToDoItem };
