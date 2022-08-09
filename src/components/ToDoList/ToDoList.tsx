import { FC } from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";

export interface IToDo {
  id: number;
  title: string;
  complete: boolean;
  dueDate: Date | null;
}

interface ITodoListProps {
  items: IToDo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  handleClick: (id: number) => void;
}
const ToDoList: FC<ITodoListProps> = ({items, toggleTodo, removeTodo, handleClick}) => {
  return (
    <>
      {items.map((todo) => (
        <ToDoItem
          key={todo.id}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          handleClick={handleClick}
          {...todo}
        />
      ))}
    </>
  );
};

export { ToDoList };