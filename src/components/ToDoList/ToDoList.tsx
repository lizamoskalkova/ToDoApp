import { Box } from "@mui/system";
import { FC } from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import type { RootState } from "../../Store/store";
import { useSelector } from "react-redux";

const ToDoList = () => {
  const todos = useSelector((state: RootState)=> state.todos.todos)
  return (
    <Box sx={{ width: 400 }}>
      {todos?.map((todo) => (
        <ToDoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </Box>
  );
};

export { ToDoList };
