import React from "react";
import './App.css';
import NavBar from './components/NavBar';
import FlippableCard from "./components/Flippable-Card";
import Button from "./components/button/Button";


function App() {

  return (
    <div className="App">
      <NavBar />
      <FlippableCard />
      <Button />
    </div>
  );
}


export default App;
