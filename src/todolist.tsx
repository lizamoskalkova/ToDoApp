import { ITodo } from "./data";
import { FC } from "react";
import {ToDoItem} from './todoitem'


interface ITodoListProps {

    items: ITodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}
const ToDoList: FC<ITodoListProps>  = (props) => {
    const {items, toggleTodo, removeTodo} = props;
    return <div>
    {
        items.map(todo => 
        <ToDoItem 
            key={todo.id} 
            toggleTodo = {toggleTodo}
            removeTodo = {removeTodo}
            {...todo} />)
    }
    </div>
}

export {ToDoList}
