import React from 'react';
import '../../Style/Join.css';
import logo from '../../Images/logo.png';
import {Link} from 'react-router-dom';

let user;

const Join = () => {

  const sendUser = () => {
    user = document.getElementById('JoinInput').value;
  }

  return (
    <div className='JoinPage'>
      <div className='JoinContainer'>
        <img src={logo} alt='logo'/>
        <h1>Chat-DM</h1>

        <input type="text" id="JoinInput" placeholder='Enter your name' />
        <Link to='/chat'>
          <button onClick={sendUser} className='JoinBtn'>Login</button>
        </Link>
      </div>
    </div>
  )
}

export default Join
export {user}