import React from 'react';
import './App.css';
import IncrementButton from "./component/IncrementButton";
import HoverCOunter  from './component/HoverCounter'


function App() {
  return (
    <div className="App">
      <IncrementButton></IncrementButton>
      <HoverCOunter></HoverCOunter>
    </div>
  );
}

export default App;
