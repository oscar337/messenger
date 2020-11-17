import React, { useState,useEffect } from 'react'
import './App.css';
import Messages from './Messages'
import logo from './icons8-facebook-messenger-256.png';
import {Button,FormControl,InputLabel,Input} from '@material-ui/core';

function App() {
  
  const [input, setInput] = useState(' ');
  const [username, setUsername] = useState(' ');
  const [messages, setMessages] = useState([
    {username: 'admon', text: 'good luck'},
    {username: 'admon', text: 'programming is a mental gym'},
    {username: 'invited', text: 'yes,is true'}
  ])

  console.log(input);
  console.log(messages);
  
  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [] )

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput('');
  }
  
  return (
    <div className="App">
      <img src={logo}></img>
      <h1>Chat de Messenger</h1>
      <h2>Welcome {username}</h2>
      <form>
       <FormControl>
         <InputLabel>Enter Message...</InputLabel>
         <Input value ={input} onChange={event => setInput(event.target.value)}/>
         <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={ sendMessage }>Send Message</Button>
       </FormControl>
      </form>
       { 
         messages.map(message => (
            <Messages user={username} username={message.username} text={message.text} />
         ))  
        }
    </div>
  );
}

export default App;
