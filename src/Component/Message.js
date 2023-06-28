import React from 'react';
import '../Style/Message.css';

const Message = ({user, message, messageClass}) => {
    if(user) {
        return (
            <div className={`messageBox ${messageClass}`}>
              {`${user} : ${message}`}
            </div>
        )
    } else {
        return (
            <div className={`messageBox ${messageClass}`}>
              {`You : ${message}`}
            </div>
        )
    }
}

export default Message
