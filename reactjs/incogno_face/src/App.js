import React from 'react';
import Login from './Login';
import Create from './Create';
import './App.css';

function App(){

  return(
    <div className='App'>
      <h1 className="incogno">Incogno</h1>
      <Login/>
      <Create/>
    </div>
  );
}

export default App;