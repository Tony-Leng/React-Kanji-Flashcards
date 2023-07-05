import React, { useState } from "react";
import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card';


function App() {
  const [currentKanji, setCurrentKanji] = useState([
    {
      id: 1,
      character: "日",
      onyomi: "nichi, jitsu",
      kunyomi: "hi, -bi, -ka",
      meaning: "Day, sun, Japan, counter for days",
      jlpt: "N5",
    },
    {
      id: 2,
      character: "一",
      onyomi: "ichi",
      kunyomi: "hito(tsu)",
      meaning: "One",
      jlpt: "N5",
    },
  ]);

  return (
    <div className="App">
      <NavBar />
      <Card currentKanji={currentKanji}/>
    </div>
  );
}


export default App;

// randomKanji(currentKanji) {
//   const kanji = currentKanji[Math.floor(Math.random() * currentKanji.length)];
//   return(kanji);
// };
