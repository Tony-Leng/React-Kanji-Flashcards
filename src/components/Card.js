// import { useState } from "react";
import React from "react";
import ReactCardFlip from "react-card-flip";

export default function Card (props) {
  const kanji = props.kanji;
  const onyomi = props.onyomi;
  const kunyomi = props.kunyomi;
  const meaning = props.meaning;
  const jlpt = props.jlpt;
  const hiragana = props.hiragana;
  const katakana = props.katakana;
  const flipCard = props.flipCard;
  const isFlipped = props.isFlipped;

  return (
    <div>
      <ReactCardFlip
        flipDirection="horizontal"
        isFlipped={isFlipped}>
        <div className="card-body card-front" onClick={flipCard}>
          <h1>{ kanji }</h1>
        </div>
        <div className="card-body card-back" onClick={flipCard}>
          <h3>Onyomi:</h3>
          <h4>{ katakana }</h4>
          <h4>{ onyomi }</h4>
          <h3>Kunyomi:</h3>
          <h4>{ hiragana }</h4>
          <h4>{ kunyomi }</h4>
          <h3>Meaning:</h3>
          <h4>{ meaning }</h4>
          <div className="jlpt-badge">
            <h5 className="jlpt-title">JLPT</h5>
            <h1 className="jlpt-lvl">{ jlpt }</h1>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  )
}
