import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
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
    },{
      id: 4,
      character: "人",
      onyomi: "jin",
      kunyomi: "hito",
      meaning: "Person",
      jlpt: "N5",
    },
    {
      id: 5,
      character: "年",
      onyomi: "nen",
      kunyomi: "toshi",
      meaning: "Year, counter for years",
      jlpt: "N5",
    }
  ]

  const [currentKanji, setCurrentKanji] = useState(currentKanji);
  const [currentOnyomi, setCurrentOnyomi] = useState(currentOnyomi);
  const [currentKunyomi, setCurrentKunyomi] = useState(currentKunyomi);
  const [currentMeaning, setCurrentMeaning] = useState(currentMeaning);
  const [currentJlpt, setCurrentJlpt] = useState(currentJlpt);
  const [showFront, setShowFront] = useState(true);

  useEffect(() => {
    const randomKanji = kanjiList[Math.floor(Math.random() * kanjiList.length)];
    const character = randomKanji.character;
    const onyomi = randomKanji.onyomi;
    const kunyomi = randomKanji.kunyomi;
    const meaning = randomKanji.meaning;
    const jlpt = randomKanji.jlpt;
    setCurrentKanji(character);
    setCurrentOnyomi(onyomi);
    setCurrentKunyomi(kunyomi);
    setCurrentMeaning(meaning);
    setCurrentJlpt(jlpt);
  }, []);

  const getKanji = () => {
    let randomKanji = kanjiList[Math.floor(Math.random() * kanjiList.length)].character;
    do {
      randomKanji = kanjiList[Math.floor(Math.random() * kanjiList.length)].character;
    } while (randomKanji === currentKanji);
    setCurrentKanji(randomKanji);
  }
  return (
    <div className="App">
      <NavBar />
      <CSSTransition
        in={showFront}
        timeout={300}
        classNames={'flip'}
      >
        <Card
          onClick={()=>{
            setShowFront((f) => !f);
          }}s
          kanji={currentKanji}
          onyomi={currentOnyomi}
          kunyomi={currentKunyomi}
          meaning={currentMeaning}
          jlpt={currentJlpt}/>
      </CSSTransition>
      <button onClick={ getKanji }>Next Kanji</button>
    </div>
  );
}


export default App;
