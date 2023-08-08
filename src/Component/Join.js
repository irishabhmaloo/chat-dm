import React, { useState } from 'react';
import '../Style/Join.css';
import logo from '../Images/logo.png';
import {Link} from 'react-router-dom';

let user;

const Join = () => {

  // setting user detail
  const sendUser = () => {
    user = document.getElementById('JoinInput').value;
    document.getElementById('JoinInput').value = '';
  }

  // validating non-empty username
  const [name, setname] = useState("");

  return (
    <div className='JoinPage'>
      <div className='JoinContainer'>
        <img src={logo} alt='logo'/>
        <h1>Chat-DM</h1>

        <input 
          type="text" 
          id="JoinInput" 
          placeholder='Enter your name' 
          onChange={(event) => setname(event.target.value)}/>

        <Link to='/chat' 
          onClick={(e)=> !name ? e.preventDefault() : null}>
          {/* prevent default - prevent behavior of link to go ahead */}

          <button onClick={sendUser} className='JoinBtn'>Login</button>
          
        </Link>
      </div>
    </div>
  )
}

export default Join
export {user}