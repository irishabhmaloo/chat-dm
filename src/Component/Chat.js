import React, { useEffect } from 'react';
import {user} from './Join';
import socketIO from 'socket.io-client';
import "../Style/Chat.css";
import sendLogo from '../Images/send.png';

// endpoint = server URL
const ENDPOINT = "http://localhost:4500";

const Chat = () => {

  // on connect
  useEffect(() => {

    // creating socket
    const socket = socketIO(ENDPOINT, {transports: ['websocket']});

    socket.on("connect", ()=>{
      alert("Connection established!");
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
  
  return (
    <div className='chatPage'>
      <div className='chatContainer'>
        <div className='header'></div>
        <div className='chatBox'></div>
        <div className='inputBox'>
          <input type='text' id='chatInput' />
          <button className='sendBtn'> <img src={sendLogo} alt="send logo" /> </button>
        </div>
      </div>
      
    </div>
  )
}

export default Chat
