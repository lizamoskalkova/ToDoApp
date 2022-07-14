import React, { FC, useState, useEffect } from 'react';
import {ITodo} from './data';
import { ToDoList } from './todolist';
import { TextField, Button, Box } from '@mui/material';
import { AnyARecord } from 'dns';

let today: object = new Date();


const tele = Telegram.WebApp;


const App: FC = () => {


  useEffect (() => {
    tele.ready();
  })
  tele.MainButton.text = "Hey"
  tele.MainButton.show()
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const addTodo = () => {

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
    setValue('');}
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


  return (
    <div >
        <h1 style={{
          fontFamily: 'Tahoma', 
          color: '#229ED9', 
          position: 'fixed', 
          left: '45%', 
          top: '15%',
          }}>ToDo App</h1>
            <div style={{
              position: 'fixed',
              display:"flex", 
              left: '38.5%', 
              top: '24%',
              alignItems:"center"}}>
          <TextField 
                defaultValue={value} 
                onChange={ (e) => setValue(e.target.value)}
                inputProps={{ 
                    style: { 
                        width: 300, 
                        height: 5, 
                        fontFamily: 'arial', 
                        color: 'black'}}} 
                focused margin="dense"/> 
            <Button sx={{m: 1}} variant="contained" onClick = {addTodo} >Add</Button></div>
      <div style={{
        position: 'fixed',
        display:"flex", 
        left: '37.5%', 
        top: '31%'}}>
          <ToDoList items = {todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/></div>
    </div>
  );
}

export default App;
