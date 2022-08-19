import { TextField, Checkbox, Stack, Box, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { fetchTodos, removeTodo, toggleTodo } from "../../store/slices/todoSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { database } from "../../icandev";

const ToDoItem = ({ taskid, title, complete, dueDate }) => {
  const dispatch = useAppDispatch();
  const { todosFromDB } = useAppSelector((state) => state.todos);
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch, todosFromDB]);

  const deleteTask = () => {
    dispatch(removeTodo({ taskid }));
    const deletedTask = todosFromDB.find(todo=>todo.taskid==taskid)?.rowId ?? "";
    database.table("taskdata").deleteRow(deletedTask);
  }
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
        //focused margin="dense"
      />
      <Checkbox
        id="check"
        checked={complete}
        onChange={() => dispatch(toggleTodo({ taskid }))}
        //onClick={() => handleClick(id)}
      />
      <IconButton
        aria-label="delete"
        onClick={deleteTask}
      >
        <DeleteIcon />
      </IconButton>
    </>
  );
};

export { ToDoItem };
