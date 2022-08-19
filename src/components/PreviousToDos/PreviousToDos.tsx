import { useEffect } from "react";
import { Box, IconButton, TextField } from "@mui/material";
import { tgUser } from "../../telegram";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchTodos, removeTodo } from "../../store/slices/todoSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { database } from "../../icandev";

const PreviousToDos = () => {
  const dispatch = useAppDispatch();
  const { todosFromDB } = useAppSelector((state) => state.todos);


  /*const deleteTask = () => {
    dispatch(removeTodo(todosFromDB.find));
    const deletedTask = todosFromDB.find(todo=>todo.taskid===taskid)?.rowId ?? "";
    database.table("taskdata").deleteRow(deletedTask);
  }*/
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <Box  m={1} pt={2}>
      {todosFromDB
        .filter((user) => user.userId === tgUser?.toString())
        .map((user, index) => (
          <div key={index}>
            <TextField
            inputProps={{
              style: {
                width: 200,
                left: "10.5%",
                height: 5,
                fontFamily: "arial",
                color: "black",
              },
            }}
            value={user.title}
            
          ></TextField><IconButton
            aria-label="delete"
            //onClick={()=>dispatch(removeTodo(user.taskid))}
          >
              <DeleteIcon />
            </IconButton></div>
        ))}{" "}
    </Box>
  );
};

export default PreviousToDos;
