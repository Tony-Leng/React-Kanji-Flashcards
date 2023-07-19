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
      katakana: "ニチ, ジツ",
      kunyomi: "hi, -bi, -ka",
      hiragana: "ひ, -び, -か",
      meaning: "day, sun, Japan, counter for days",
      jlpt: "N5",
    },
    {
      id: 2,
      character: "一",
      onyomi: "ichi",
      katakana: "イチ",
      kunyomi: "hito(tsu)",
      hiragana: "ひと(つ)",
      meaning: "One",
      jlpt: "N5",
    },
    {
      id: 3,
      character: "国",
      onyomi: "koku",
      katakana: "コク",
      kunyomi: "kuni",
      hiragana: "くに",
      meaning: "Country",
      jlpt: "N5",
    },
    {
      id: 4,
      character: "人",
      onyomi: "jin, nin",
      katakana: "ジン、 ニン",
      kunyomi: "hito",
      hiragana: "ひと",
      meaning: "Person",
      jlpt: "N5",
    },
    {
      id: 5,
      character: "年",
      onyomi: "nen",
      katakana: "ネン",
      kunyomi: "toshi",
      hiragana: "とし",
      meaning: "Year, counter for years",
      jlpt: "N5",
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(currentIndex);
  const [currentKanji, setCurrentKanji] = useState(currentKanji);
  const [currentOnyomi, setCurrentOnyomi] = useState(currentOnyomi);
  const [currentKunyomi, setCurrentKunyomi] = useState(currentKunyomi);
  const [currentMeaning, setCurrentMeaning] = useState(currentMeaning);
  const [currentHiragana, setCurrentHiragana] = useState(currentHiragana);
  const [currentKatakana, setCurrentKatakana] = useState(currentKatakana);
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
    const hiragana = kanji.hiragana;
    const katakana = kanji.katakana;
    setCurrentIndex(index);
    setCurrentKanji(character);
    setCurrentOnyomi(onyomi);
    setCurrentKunyomi(kunyomi);
    setCurrentMeaning(meaning);
    setCurrentJlpt(jlpt);
    setCurrentHiragana(hiragana);
    setCurrentKatakana(katakana);
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
    setCurrentHiragana(randomKanji.hiragana);
    setCurrentKatakana(randomKanji.katakana);
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
        hiragana={currentHiragana}
        katakana={currentKatakana}
        flipCard={flipCard}
        isFlipped={isFlipped}
      />
      <Button
        getKanji={getKanji}
      />
    </div>
  );
}
