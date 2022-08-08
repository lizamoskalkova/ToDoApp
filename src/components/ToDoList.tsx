import { ITodo } from "../data/data";
import { FC } from "react";
import { ToDoItem } from "./ToDoItem";

interface ITodoListProps {
  items: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  handleClick: (id: number) => void;
}
const ToDoList: FC<ITodoListProps> = (props) => {
  const { items, toggleTodo, removeTodo, handleClick } = props;
  return (
    <div>
      {items.map((todo) => (
        <ToDoItem
          key={todo.id}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          handleClick={handleClick}
          {...todo}
        />
      ))}
    </div>
  );
};

export { ToDoList };
