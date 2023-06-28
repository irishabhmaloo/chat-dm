import React from 'react';
import '../Style/Message.css';

const Message = ({message}) => {
  return (
    <div className='messageBox'>
      {message}
    </div>
  )
}

export default Message
