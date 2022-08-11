import { Box } from "@mui/system";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import type { RootState } from "../../store";
import { useSelector } from "react-redux";

const ToDoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  return (
    <Box sx={{ width: 400 }}>
      {todos?.map((todo) => (
        // @ts-ignore
        <ToDoItem key={todo.id} {...todo} />
      ))}
    </Box>
  );
};

export { ToDoList };
