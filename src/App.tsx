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
    setTodos([...todos, {
      id: Date.now(),
      title: value,
      complete: false,
    }])
    setValue('');
  }
  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const toggleTodo = (id: number): void =>{
    setTodos(todos.map(todo => {
      if (todo.id != id) return todo;
      return {
        ...todo,
        complete: !todo.complete

      }
    }))
  }


  return (
    <div className="App" style={{
      position: 'fixed', left: '50%', top: '15%',
      transform: 'translate(-50%, -50%)', color: 'rgb(24, 213, 224)'
    }}>
      <header>
          <h1 style={{fontFamily: 'Tahoma', color: ''}}>ToDo App</h1>
      </header>
      <div className="input-text-wrapper" style={{display:"flex", alignItems:"center"}}>
      <TextField 
            defaultValue={value} 
            onChange={ (e) => setValue(e.target.value)}
            inputProps={{ 
                style: { 
                    width: 300, 
                    height: 5, 
                    fontFamily: 'arial', 
                    color: 'black'}}} 
            focused margin="dense" /> 
      <Box mt={1}></Box>
        <Button variant="contained" onClick = {addTodo} >Add</Button></div>
      <ToDoList items = {todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
    </div>
  );
}

export default App;
