import React from "react";

const Card = (props) => {
  const displayKanji = props.chosenKanji;

  return (
    <div>
        <div>{ displayKanji }</div>
    </div>
  )
}

export default Card;
