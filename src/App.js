import React, { useEffect, useState } from "react";
import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card';
import Button from './components/Button';


export default function App() {
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
    },
    {
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

  const [currentIndex, setCurrentIndex] = useState(currentIndex);
  const [currentKanji, setCurrentKanji] = useState(currentKanji);
  const [currentOnyomi, setCurrentOnyomi] = useState(currentOnyomi);
  const [currentKunyomi, setCurrentKunyomi] = useState(currentKunyomi);
  const [currentMeaning, setCurrentMeaning] = useState(currentMeaning);
  const [currentJlpt, setCurrentJlpt] = useState(currentJlpt);
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  }

  useEffect(() => {
    const kanji = kanjiList[Math.floor(Math.random() * kanjiList.length)];
    const index = kanji.id;
    const character = kanji.character;
    const onyomi = kanji.onyomi;
    const kunyomi = kanji.kunyomi;
    const meaning = kanji.meaning;
    const jlpt = kanji.jlpt;
    setCurrentIndex(index);
    setCurrentKanji(character);
    setCurrentOnyomi(onyomi);
    setCurrentKunyomi(kunyomi);
    setCurrentMeaning(meaning);
    setCurrentJlpt(jlpt);
    setIsFlipped(false);
  }, []);

  const getKanji = () => {
    let randomKanji = {};
    do {
      randomKanji = kanjiList[Math.floor(Math.random() * kanjiList.length)];
    } while (randomKanji.character === currentKanji);
    setCurrentIndex(randomKanji.id);
    setCurrentKanji(randomKanji.character);
    setCurrentOnyomi(randomKanji.onyomi);
    setCurrentKunyomi(randomKanji.kunyomi);
    setCurrentMeaning(randomKanji.meaning);
    setCurrentJlpt(randomKanji.jlpt);
    setIsFlipped(false);
    console.log(currentKanji);
  }

  return (
    <div className="App">
      <NavBar />
      <Card
        kanji={currentKanji}
        onyomi={currentOnyomi}
        kunyomi={currentKunyomi}
        meaning={currentMeaning}
        jlpt={currentJlpt}
        flipCard={flipCard}
        isFlipped={isFlipped}
      />
      <Button
        getKanji={getKanji}
      />
    </div>
  );
}
