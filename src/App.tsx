import  { FC, useState, useEffect, useCallback } from 'react';
import {ITodo} from './data';
import { ToDoList } from './todolist';
import  { RowRequest } from "icandev-js-sdk";
import { TextField, Button, Box } from '@mui/material';
import {  database } from './icandev';
import { tgUserInfo } from './tg';
import Drawer from './Drawer';


let today: object = new Date();

const tele:any = Telegram.WebApp;


const App: FC = () => {


  tele.MainButton.text = "Main Button"
  tele.MainButton.show()
 
  useEffect (() => {
    tele.ready();
  })
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  
   
  const addTodo = ( ) => {
  if (value !== '') 
    {
      setTodos(todos => [
      {
        id: Date.now(),
        title: value,
        complete: false,
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
  'data': {'title': value, 'user_id': String(tele.initDataUnsafe.user?.id ?? "*"), 'content': String(tele.initDataUnsafe.user?.first_name ?? "*")} 
}

const onck= (e: any) =>{
  addTodo();
  database.table("taskdata").addRow(rowrequest);
}

  return (
    <div >
     
        <h1 style={{
          fontFamily: 'Tahoma', 
          color: '#229ED9', 
          position: 'fixed', 
          left: '30%', 
          top: '15%',
          }}>ToDo App</h1>
          <h2> <Drawer/> </h2>
            <div style={{
              position: 'fixed',
              display:"flex", 
              left: '10.5%', 
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
            <Button sx={{m: 1}} variant="contained" onClick = {onck} >Add</Button></div>
        <div className="todo" style={{
          position: 'fixed',
          display:"flex", 
          left: '8.5%',
          width: 1000, 
          top: '40%'}}>
      <ToDoList items = {todos} removeTodo={removeTodo} toggleTodo={toggleTodo} handleClick ={handleClick}/></div>
    </div>
  );
}

export default App;


