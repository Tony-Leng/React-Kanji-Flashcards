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
            <div className="card-back-def">
              <div className="card-back-title">
                <h2>Onyomi:</h2>
              </div>
              <div className="card-back-def-width">
                <h3>{ katakana }</h3>
                <h3>{ onyomi }</h3>
              </div>
            </div>
            <div className="card-back-def">
              <div className="card-back-title">
                <h2>Kunyomi:</h2>
              </div>
              <div className="card-back-def-width">
                <h3>{ hiragana }</h3>
                <h3>{ kunyomi }</h3>
              </div>
            </div>
            <div className="card-back-def">
              <div className="card-back-title">
                <h2>Meaning:</h2>
              </div>
              <div className="card-back-def-width">
                <h3>{ meaning }</h3>
              </div>
            </div>
          </div>
          <div className="jlpt-badge">
            <h5 className="jlpt-title">JLPT</h5>
            <h1 className="jlpt-lvl">{ jlpt }</h1>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  )
}
