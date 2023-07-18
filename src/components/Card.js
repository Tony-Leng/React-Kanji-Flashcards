// import { useState } from "react";
import React from "react";
import ReactCardFlip from "react-card-flip";

export default function Card (props) {
  const kanji = props.kanji;
  const onyomi = props.onyomi;
  const kunyomi = props.kunyomi;
  const meaning = props.meaning;
  const jlpt = props.jlpt;
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
          <h3>Onyomi: { onyomi }</h3>
          <h3>Kunyomi: { kunyomi }</h3>
          <h3>Meaning: { meaning}</h3>
          <h3>JLPT: { jlpt }</h3>
        </div>
      </ReactCardFlip>
    </div>
  )
}
