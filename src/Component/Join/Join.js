import React from 'react';
import '../../Style/Join.css';
import logo from '../../Images/logo.png';

const Join = () => {
  return (
    <div className='JoinPage'>
      <div className='JoinContainer'>
        <img src={logo} alt='logo'/>
        <h1>Chat-DM</h1>
      </div>
    </div>
  )
}

export default Join
