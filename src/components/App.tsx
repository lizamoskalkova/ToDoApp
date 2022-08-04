import  { FC, useState, useEffect, useCallback } from 'react';
import {ITodo} from '../data/data';
import { ToDoList } from './ToDoList';
import  { RowRequest } from "icandev-js-sdk";
import { TextField, Button, Box, AppBar, Toolbar, Typography, Stack } from '@mui/material';
import {  database } from '../icandev';
import Drawer from './Drawer';
import { DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';




let today: object = new Date();

const tele:any = Telegram.WebApp;


const App: FC = () => {
 
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  const addTodo = ( ) => {
  if (value !== '') 
    {
      setTodos(todos => [
      {
        id: Date.now(),
        title: value,
        complete: false,
        dueDate: selectedDate,
      },
      ...todos,
     ])
  }
  setValue("");
  
  }
  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const toggleTodo = (id: number): void =>{
    setTodos(todos.map(todo => {
      if (todo.id != id) return todo;
      return {
        ...todo,
        complete: !todo.complete,
      }
    }
    ))
  }

  function strikeThrough(text: string) {
    return text
      .split('')
      .map((char: string) => char + '\u0336')
      .join('')
  }
  const handleClick = (id: number): void => {
     todos.map(todo => {
       if (todo.id === id && todo.complete === false) 
          todo.title = strikeThrough(todo.title)
       else
          todo.title = todo.title.replace(/[\u0336]/g, '')
      })
  }
  const handleKeyDown =(e: any) => {
    if(e.key == 'Enter') 
      {
        setTodos(todos => [
        {
          id: Date.now(),
          title: value,
          complete: false,
          dueDate: selectedDate,
        },
        ...todos,
       ])
       setValue("");
       database.table("taskdata").addRow(rowrequest);
      }
}
const completedtodo = todos.filter(todo => todo.complete == true);
const found = todos.some(r=> completedtodo.indexOf(r) >= 0)

const rowrequest: RowRequest= {
  'data': {'title': value, 'user_id': String(tele.initDataUnsafe.user?.id ?? "*"), 'first_name': String(tele.initDataUnsafe.user?.first_name ?? "*")} 
}

const onck= (e: any) =>{
  addTodo();
  database.table("taskdata").addRow(rowrequest);
}

  return (
    <div >
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style ={{
          justifyContent: 'space-between ',
        }}>
          <Drawer/>
           <Typography style={{
              fontFamily: 'Tahoma', 
              color: 'white', 
              alignContent: 'center',
             }}>ToDo App
           </Typography> 
        </Toolbar>
       </AppBar>
      </Box>
      <div style={{
              position: 'fixed',
              display:"flex", 
              left: '5.5%', 
              top: '30%',
              alignItems:"center"}}>
          <TextField 
                value={value}
                onChange={ (e) => setValue(e.target.value)}
                onKeyDown = {handleKeyDown}
                inputProps={{ 
                    style: { 
                        width: 210, 
                        height: 5, 
                        fontFamily: 'arial', 
                        color: 'black'}}} 
                        focused margin="dense"/> 
           <LocalizationProvider dateAdapter={AdapterDateFns}>
           <Stack spacing={4} sx={{ width: '50px'}}>
                <DatePicker 
                  
                  value={selectedDate}
                  onChange={(newValue) => {
                    setSelectedDate(newValue);
                  }}
                  renderInput={(params) => <TextField size='small'{...params} />}
                  />
                  </Stack>
                  </LocalizationProvider>
                  <Button sx={{m: 1}} 
                  variant="contained" 
                  onClick = {onck} >Add
              </Button>
                </div>
        <div className="todo" style={{
          position: 'fixed',
          display:"flex", 
          left: '7.5%',
          width: 1000, 
          top: '40%'}}>
      <ToDoList items = {todos} removeTodo={removeTodo} toggleTodo={toggleTodo} handleClick ={handleClick}/></div>
    </div>
  );
}

export default App;


