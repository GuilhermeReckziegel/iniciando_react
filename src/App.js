import React, {useState} from 'react'

import "./App.css";

const App = () => {
  // let message = 'Me livrei da maldição !!';
  const [message, setMessage] = useState('Me livrei da maldição !!');

  return (
    <>
      <div className="container">{message}</div>
      <button onClick={() => setMessage("Hello World !!")}>mudar</button>
    </>
  );
     
}

export default App;