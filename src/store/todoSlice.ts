import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IToDo } from "../components/ToDoList/ToDoList";
import { v4 as uuidv4 } from "uuid";
import { TelegramWebApps } from "telegram-webapps-types";

const initialState = [] as IToDo[];
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    onButtonAddToDo: {
      reducer: (state, action: PayloadAction<IToDo>) => {
        state.push(action.payload);
      },
      prepare: (title: string, dueDate: Date | null) => ({
        payload: {
          id: uuidv4(),
          title,
          dueDate,
          complete: false,
        } as IToDo,
      }),
    },
    toggleTodo: (state, action) => {},
    removeTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
  },
});


export const { onButtonAddToDo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
