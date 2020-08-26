import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './Join.css'

const Join = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div><input placeholder="Name" onChange={(e) => setName(e.target.value)} type="text" className="joinInput"/></div>
        <div><input placeholder="Room" onChange={(e) => setRoom(e.target.value)} type="text" className="joinInput mt-20"/></div>
        <Link onClick={(e) => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className="button mt-20">Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default Join;
