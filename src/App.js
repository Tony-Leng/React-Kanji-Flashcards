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

  const [currentKanji, setCurrentKanji] = useState("日");

  // useEffect(() => {
  //   const randomKanji = kanjiList[Math.floor(Math.random() * kanjiList.length)];
  //   const kanji = randomKanji.character;
  // }, [currentKanji]); //dependency array

  const randomKanji = () => {
    const randomKanji = kanjiList[Math.floor(Math.random() * kanjiList.length)];
    const kanji = randomKanji.character;
    setCurrentKanji(kanji);
  }
  return (
    <div className="App">
      <NavBar />
      <Card chosenKanji={currentKanji}/>
      <button onClick={ randomKanji }>Next Kanji</button>
    </div>
  );
}


export default App;
