import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
import './App.css';
import {Fab, FormControl, Icon, Input, InputLabel} from "@mui/material";
import TodoItem from "./todoItem";
import db from './firebase';
// import {Input} from "@mui/icons-material";
// import database from './firebase';
import firebase from 'firebase'
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";


function App() {
    const [todoItems, setTodoItems] = useState([]);
    const [input, setInput] = useState('');

  //   const fetchtodo=async()=>{
  //   const response=db.collection('todos');
  //   const data=await response.get();
  //   data.docs.forEach(item=>{
  //    setTodoItems([...todoItems,item.data()])
  //   })
  // }
    useEffect(() => {
        db.collection('todos').orderBy('timestamp', "desc").onSnapshot(snapshot => {
            console.log('!!!!!!!!!!!', snapshot.docs.map((doc) => doc.data()))
            setTodoItems(snapshot.docs.map((doc) => doc.data()))

        });

    }, []);

    // console.log(todoItems)
    const onInputChange = (e) => {
        setInput(e.target.value)
    }
    const addTodoItem = (e) => {
        e.preventDefault()
        const id = Math.floor(Math.random() * 1000);
        db.collection('todos').add({
            task: input,
            timestamp: firebase.firestore.Timestamp.now()
        })
        setInput('')

    }
    const deleteText = (text) => {
        // console.log('in deleteText', text)
        const tempState =  todoItems.filter(item => item.task !== text)
        // todoItems.filter(item => console.log("IN FILTER", item.task))
        setTodoItems(tempState)
        // console.log(tempState)
    }
  return (
    <div className="App"><br/>
        <form action="">
            <FormControl>
                <InputLabel><Icon>add_circle</Icon>  Add a Todo</InputLabel>
                <Input type="text" onChange={onInputChange} value={input} />
            </FormControl>
            <Button type='submit' disabled={!input} variant="contained" onClick={addTodoItem}>Add Todo</Button>
        </form>

            {/*{todoItems.map(item => <ul key={item.id}>{item.task}</ul>)}*/}
            {/*{todoItems.map((item, index) => <ul> {item.task}</ul>)}*/}
        <ul>
            {todoItems.map((item) => (
                <TodoItem item={item} onDeleteText={deleteText }/>
            ))}
        </ul>
    </div>
  );
}

export default App;
