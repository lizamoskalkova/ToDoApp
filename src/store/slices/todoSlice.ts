import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { database } from "../../icandev";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async function (_, { rejectWithValue }) {
    try {
      return await database
        .table("taskdata")
        .getPage(1, 1000)
        .then((res) => {
          if (res) {
            return res;
          }
        });
    } catch (err: any) {
      return rejectWithValue(err);
    }
  }
);

type TTodo = {
  id: string;
  title: string;
  dueDate: string;
  complete: boolean;
};

type DBTodo = {
  rowId: string;
  userId: string;
  userName: string;
  title: string;
  complete: boolean;
};

interface ITodosState {
  todos: TTodo[];
  todosFromDB: DBTodo[];
  userId: null | string;
}

const initialState: ITodosState = {
  todos: [],
  todosFromDB: [],
  userId: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo: (state, { payload }) => ({
      ...state,
      todos: [...state.todos,
        {
           id: uuidv4(),
           title: payload.value,
           dueDate: payload.selectedDate,
           complete: false,
        }
      ]
    }),
    toggleTodo: (state, action) => {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      //toggledTodo.complete = !toggledTodo.complete;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      if (payload) {
        payload.rows.forEach((row) => {
          const { first_name, is_done, title, user_id } = row.data;
          state.todosFromDB.push({
            userName: first_name,
            complete: is_done === "true" ? true : false,
            title,
            userId: user_id,
            rowId: row.id,
          });
        });
      }
    });
  },
});

const previousTask = createSlice({
  name: 'previousTasks',
  initialState: false,
  reducers: {
    changeState: state => true
  }
});


export const { addToDo, toggleTodo, removeTodo } = todoSlice.actions;
export const { changeState } = previousTask.actions;
export const todoReducer = todoSlice.reducer;
export const previoustasksReducer = previousTask.reducer;