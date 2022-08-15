import { ToDoList } from "../ToDoList/ToDoList";
import { RowRequest } from "icandev-js-sdk";
import { addToDo } from "../../store/slices/todoSlice";
import {
  TextField,
  Button,
  Box,
  Stack,
} from "@mui/material";
import { database } from "../../icandev";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { tgUser, tgUserName } from "../../telegram";
import { useAppDispatch, useAppSelector } from "../../store";
import PreviousToDos from "../PreviousToDos";
import Header from "../Header";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Home: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [taskid, setTaskId] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const dispatch = useAppDispatch();
  const { previousTasks } = useAppSelector((state) => state);
  const { todos } = useAppSelector((state) => state);

  const rowRequest: RowRequest = {
    data: {
      title: value,
      user_id: tgUser?.toString() ?? "*",
      first_name: tgUserName?.toString() ?? "*",
      dueDate: selectedDate?.toISOString() ?? "*",
      taskid: taskid,
    },
  };

  const handleEnter =(e: any) => {
    setTaskId(uuidv4());
    if(e.key == 'Enter') 
    {
      setTaskId(uuidv4());
      addTask();
    }
  }

  const addTask = () => {
    dispatch(addToDo({ taskid, value, selectedDate }));
    database.table("taskdata").addRow(rowRequest);
    setValue("");
  };
 
  if (!previousTasks)
  { 
    return (
    <>
     <Header/>
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
          onKeyDown={handleEnter}
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
}
  return (
  <>
    <Header/>
      <PreviousToDos/>
  </>
  );
};

export default Home;
