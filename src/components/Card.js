import React from "react";

const Card = (props) => {
  const displayKanji = props.currentKanji;

  return (
    <div>
        <div>{ displayKanji }</div>
      <button>Next Kanji</button>
    </div>
  )
}

export default Card;
