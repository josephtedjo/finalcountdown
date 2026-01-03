import { useState, useRef } from "react";
export default function Player() {

  const userName = useRef();
  const [playerName, setPlayerName] = useState('');


  function handleClick() {
    setPlayerName(userName.current.value);
  }
  
  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'Unknown Entity'}</h2>
      <p>
        <input ref={userName} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
