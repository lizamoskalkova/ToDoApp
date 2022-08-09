import { useState } from "react";
import { ToDoList, IToDo } from "./ToDoList/ToDoList";
import { RowRequest } from "icandev-js-sdk";
import {
  TextField,
  Button,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Stack,
} from "@mui/material";
import { database } from "../icandev";
import Drawer from "./Drawer";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { tgUser, tgUserName } from "../tgUser/User";

let today: object = new Date();

const tele: any = Telegram.WebApp;

tele.expand();

const App: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<IToDo[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const rowRequest: RowRequest = {
    data: {
      title: value,
      user_id: tgUser?.toString() ?? '*',
      first_name: tgUserName?.toString() ?? '*',
    },
  };
  const onButtonAddToDo = () => {
    if (value) {
      setTodos((todos) => [
        {
          id: Date.now(),
          title: value,
          complete: false,
          dueDate: selectedDate,
        },
        ...todos,
      ]);
    }
    setValue("");
  };
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id: number)=> {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    );
  };

  const strikeThrough = (text: string): string => {
    return (
      text
      .split("")
      .map((char: string) => char + "\u0336")
      .join("")
    );
  }
  const handleClick = (id: number): void => {
    todos.map((todo) => {
      if (todo.id === id && !todo.complete)
        todo.title = strikeThrough(todo.title);
      else todo.title = todo.title.replace(/[\u0336]/g, "");
    });
  };
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      setTodos((todos) => [
        {
          id: Date.now(),
          title: value,
          complete: false,
          dueDate: selectedDate,
        },
        ...todos,
      ]);
      setValue("");
      database.table("taskdata").addRow(rowRequest);
    }
  };
  //const completedtodo = todos.filter((todo) => todo.complete == true);

  const addToDB = (e: any) => {
    onButtonAddToDo();
    database.table("taskdata").addRow(rowRequest);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            style={{
              justifyContent: "space-between ",
            }}
          >
            <Drawer />
            <Typography
              style={{
                fontFamily: "Tahoma",
                color: "white",
                alignContent: "center",
              }}
            >
              ToDo App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          left: "5.5%",
          top: "30%",
          alignItems: "center",
        }}
      >
        <TextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          inputProps={{
            style: {
              width: 210,
              height: 5,
              fontFamily: "arial",
              color: "black",
            },
          }}
          focused
          margin="dense"
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={4} sx={{ width: "50px" }}>
            <DatePicker
              value={selectedDate}
              onChange={(newValue) => {
                setSelectedDate(newValue);
              }}
              renderInput={(params) => <TextField size="small" {...params} />}
            />
          </Stack>
        </LocalizationProvider>
        <Button sx={{ m: 1 }} variant="contained" onClick={addToDB}>
          Add
        </Button>
      </Box>
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          left: "7.5%",
          width: 1000,
          top: "40%",
        }}
      >
        <ToDoList
          items={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          handleClick={handleClick}
        />
      </Box>
    </>
  );
};

export default App;
