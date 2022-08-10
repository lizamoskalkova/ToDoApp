import { Box } from "@mui/system";
import { FC } from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";

export interface IToDo {
  id: string;
  title: string;
  complete: boolean;
  dueDate: Date | null;
}

interface ITodoListProps {

}
const ToDoList: FC<ITodoListProps> = () => {
  const todos = useSelector((state: RootState)=> state.todos)
  return (
    <Box sx={{ width: 400 }}>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </Box>
  );
};

export { ToDoList };
