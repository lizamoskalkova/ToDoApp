import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { TelegramWebApps } from "telegram-webapps-types";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
      todos: [],
  },
  reducers: {
    addToDo(state, action) {
        state.todos.push({
          id: uuidv4(),
          title: action.payload.value,
          dueDate: action.payload.selectedDate,
          complete: false,
        });

    },
    toggleTodo: (state, action) => {
        const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
        toggledTodo.complete = !toggledTodo.complete;
    },
    removeTodo:(state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
  }
});


export const { addToDo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
