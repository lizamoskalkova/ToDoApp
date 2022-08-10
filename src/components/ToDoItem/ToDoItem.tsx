import { TextField, Checkbox, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

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
