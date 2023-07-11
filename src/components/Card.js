import React from "react";

const Card = (props, {onClick}) => {
  const displayKanji = props.chosenKanji;
  const onyomi = props.onyomi;
  const kunyomi = props.kunyomi;
  const meaning = props.meaning;
  const jlpt = props.jlpt;


  return (
    <div className="card-body" onClick={ onClick }>
        <div className="card-front">{ displayKanji }</div>
        <div className="card-back">
          <h3>{ onyomi }</h3>
          <h3>{ kunyomi }</h3>
          <h3>{ meaning}</h3>
          <h3>{ jlpt }</h3>
        </div>
    </div>
  )
}

export default Card;
