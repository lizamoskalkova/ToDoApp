import React, { FC, useState, useEffect } from 'react';
import {ITodo} from './data';
import { ToDoList } from './todolist';
import ICanDevApp from "icandev-js-sdk";
import { TextField, Button, Box } from '@mui/material';

let today: object = new Date();


const tele:any = Telegram.WebApp;
console.log(Telegram.WebApp.sendData)


const App: FC = () => {


  useEffect (() => {
    tele.ready();
  })
  tele.MainButton.text = "Remaining tasks"
  tele.MainButton.show()
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
    }))
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
      }
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
            <Button sx={{m: 1}} variant="contained" onClick = {addTodo} >Add</Button></div>
        <div style={{
          position: 'fixed',
          display:"flex", 
          left: '8.5%',
          width: 1000, 
          top: '40%'}}>
      <ToDoList items = {todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/></div>
    </div>
  );
}

export default App;
