import { useEffect } from "react";
import { IconButton, TextField } from "@mui/material";
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
  }, [dispatch, todosFromDB]);
  
  
  return (
    <div
      style={{
        left: "10.5%",
        width: 100,
        top: "100%",
      }}
    >
      {todosFromDB
        //?.filter((user) => user.userId === tgUser?.toString())
        .map((user, index) => (
          <><TextField
            inputProps={{
              style: {
                width: 200,
                height: 5,
                fontFamily: "arial",
                color: "black",
              },
            }}
            value={user.title}
            key={user.taskid + index}
          ></TextField><IconButton
            aria-label="delete"
            //onClick={deleteTask}
          >
              <DeleteIcon />
            </IconButton></>
        ))}{" "}
    </div>
  );
};

export default PreviousToDos;
