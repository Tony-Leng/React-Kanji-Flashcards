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
          <div className="card-back-container">
            <div className="card-back-title">
              <h2 className="card-back-title-text">Onyomi:</h2>
              <h2 className="card-back-title-text">Kunyomi:</h2>
              <h2>Meaning:</h2>
            </div>
            <div className="card-back-right">
              <h3 className="card-back-def card-back-katakana">{ katakana }</h3>
              <h3 className="card-back-def card-back-onyomi">{ onyomi }</h3>
              <h3 className="card-back-def card-back-hiragana">{ hiragana }</h3>
              <h3 className="card-back-def card-back-kunyomi">{ kunyomi }</h3>
              <h3 className="card-back-def card-back-meaning">{ meaning }</h3>
            </div>
          </div>
          <div className="jlpt-badge">
            <h1 className="jlpt-lvl">{ jlpt }</h1>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  )
}
