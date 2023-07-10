import React, { useEffect, useState } from "react";
import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card';



function App() {
  const kanjiList = [
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
    {
      id: 3,
      character: "国",
      onyomi: "koku",
      kunyomi: "kuni",
      meaning: "Country",
      jlpt: "N5",
    }
  ]

  const [currentKanji, setCurrentKanji] = useState(kanji);

  useEffect(() => {
    const kanji = kanji[Math.floor(Math.random() * kanji.length)];
    return kanji;
  }, []); //dependency array

  return (
    <div className="App">
      <NavBar />
      <Card currentKanji={currentKanji}/>
    </div>
  );
}


export default App;
