import React from "react";
import ReactCardFlip from "react-card-flip";

export default function Card (props) {
  const kanji = props.kanji;
  const onyomi = props.onyomi;
  const kunyomi = props.kunyomi;
  const meaning = props.meaning;
  const jlpt = props.jlpt;


  return (
    <div className="card-body">
      <ReactCardFlip>
        <div className="card-front">{ kanji }</div>
        <div className="card-back">
          <h3>Onyomi: { onyomi }</h3>
          <h3>Kunyomi: { kunyomi }</h3>
          <h3>Meaning: { meaning}</h3>
          <h3>JLPT: { jlpt }</h3>
        </div>
      </ReactCardFlip>
    </div>
  )
}
