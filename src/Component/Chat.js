import React, { useEffect, useState } from 'react';
import {user} from './Join';
import socketIO from 'socket.io-client';
import "../Style/Chat.css";
import sendLogo from '../Images/send.png';
import Message from './Message';
import ReactScrollToBottom from 'react-scroll-to-bottom';

// endpoint = server URL
const ENDPOINT = "http://localhost:4500";
let socket;

const Chat = () => {

  const [id, setId] = useState("");

  // messages
  const [messages, setMessages] = useState([]);
  
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
      setMessages([...messages,data]);
      console.log(data.user, data.message);
    });

    socket.on('userJoined', (data)=>{
      setMessages([...messages,data]);
      console.log(data.user, data.message);
    })

    socket.on('userLeft' , (data) => {
      setMessages([...messages,data]);
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
      setMessages([...messages,data]);
      console.log(data.user, data.message, data.id);
    })

    return () => {

    }
  }, []);
  
  return (
    <div className='chatPage'>
      <div className='chatContainer'>
        <div className='header'></div>
        <ReactScrollToBottom className='chatBox'>
          {
            messages.map((item,index) => <Message message={item.message} />)
          }
        </ReactScrollToBottom>
        <div className='inputBox'>
          <input type='text' id='chatInput' />
          <button className='sendBtn' onClick={send}> <img src={sendLogo} alt="send logo" /> </button>
        </div>
      </div>
      
    </div>
  )
}

export default Chat
