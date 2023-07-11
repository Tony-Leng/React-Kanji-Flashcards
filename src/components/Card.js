import React from "react";

const Card = (props, {onClick}) => {
  const kanji = props.character;
  const onyomi = props.onyomi;
  const kunyomi = props.kunyomi;
  const meaning = props.meaning;
  const jlpt = props.jlpt;


  return (
    <div className="card-body" onClick={ onClick }>
        <div className="card-front">{ kanji }</div>
        <div className="card-back">
          <h3>Onyomi: { onyomi }</h3>
          <h3>Kunyomi: { kunyomi }</h3>
          <h3>Meaning: { meaning}</h3>
          <h3>JLPT: { jlpt }</h3>
        </div>
    </div>
  )
}

export default Card;
