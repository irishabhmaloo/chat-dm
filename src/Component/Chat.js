import React, { useEffect } from 'react';
import {user} from './Join';
import socketIO from 'socket.io-client';

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

    return () => {

    }
  }, [socket]);
  
  return (
    <div className='chatPage'>
      <div className='chatContainer'>
        <div className='header'></div>
        <div className='chatBox'></div>
        <div className='inputBox'></div>
      </div>
      
    </div>
  )
}

export default Chat
