import React, { useEffect, useState } from 'react';
import {user} from './Join';
import socketIO from 'socket.io-client';
import "../Style/Chat.css";
import sendLogo from '../Images/send.png';
import Message from './Message';

// endpoint = server URL
const ENDPOINT = "http://localhost:4500";
let socket;

const Chat = () => {

  const [id, setId] = useState("");
  
  // chat function
  const send = () => {
    const message = document.getElementById('inputBox').value;
    socket.emit('message' , {message, id});
    document.getElementById('inputBox').value = '';
  }

  // on connect
  useEffect(() => {

    // creating socket
    socket = socketIO(ENDPOINT, {transports: ['websocket']});

    socket.on("connect", ()=>{
      alert("Connection established!");
      setId(socket.id);
    });

    console.log(socket);

    socket.emit('joined', {user});

    socket.on('welcome', (data)=>{
      console.log(data.user, data.message);
    });

    socket.on('userJoined', (data)=>{
      console.log(data.user, data.message);
    })

    socket.on('userLeft' , (data) => {
      console.log(data.user, data.message);
    })
    return () => {
      socket.emit('userDisconnect');
      socket.off();
    }
  }, []);

  // recieve message
  useEffect(() => {
    socket.on('sendMessage', (data)=>{
      console.log(data.user, data.message, data.id);
    })

    return () => {

    }
  }, []);
  
  return (
    <div className='chatPage'>
      <div className='chatContainer'>
        <div className='header'></div>
        <div className='chatBox'>
          <Message message='{}'/>
        </div>
        <div className='inputBox'>
          <input type='text' id='chatInput' />
          <button className='sendBtn' onClick={send}> <img src={sendLogo} alt="send logo" /> </button>
        </div>
      </div>
      
    </div>
  )
}

export default Chat
