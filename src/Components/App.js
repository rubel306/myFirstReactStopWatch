import React from 'react';
import './App.css';

import Title from './Title/Title';
import CountDown from './CountDown/CountDown'
function App() {
  return (
    <div className="App">
      <div className="container py-5">
        <div className="row">
            <div className="col-sm-8 offset-sm-2">
                <Title />
                <CountDown />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
