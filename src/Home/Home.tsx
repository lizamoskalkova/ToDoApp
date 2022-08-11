import { useState } from "react";
import { ToDoList } from "../Components/ToDoList/ToDoList";
import { RowRequest } from "icandev-js-sdk";
import { useDispatch } from "react-redux";
import { addToDo } from "../Store/todoSlice";
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
import Drawer from "../Components/Drawer";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { tgUser, tgUserName } from "../telegram";

const Home: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const dispatch = useDispatch();
  const rowRequest: RowRequest = {
    data: {
      title: value,
      user_id: tgUser?.toString() ?? "*",
      first_name: tgUserName?.toString() ?? "*",
    },
  };
  const addTask = () => {
    dispatch(addToDo({value, selectedDate}));
    setValue("");
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
        <Button sx={{ m: 1 }} variant="contained" onClick={addTask}>
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
        <ToDoList />
      </Box>
    </>
  );
};

export default Home;
