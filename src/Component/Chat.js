import React, { useEffect } from 'react';
import {user} from './Join';
import socketIO from 'socket.io-client';
import "../Style/Chat.css";
import sendLogo from '../Images/send.png';

// endpoint = server URL
const ENDPOINT = "http://localhost:4500";

const Chat = () => {

  // creating socket
  const socket = socketIO(ENDPOINT, {transports: ['websocket']});

  // on connect
  useEffect(() => {
    socket.on("connect", ()=>{
      alert("Connection established!");
    });

    socket.emit('joined', {user})
    return () => {

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
