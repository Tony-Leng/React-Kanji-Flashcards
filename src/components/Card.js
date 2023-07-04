import React from "react";

const Card = (props) => {
  const kanjiList = props.kanjiList;
  const character = props.kanji;

  return (
    <div>
      {kanjiList.map((kanji) => (
        <div>{ character }</div>
      ))}
    </div>
  )
}

export default Card;


  // return (
  //   // <div className="card-body">
  //   //   <section className="card-front">
  //   //     <h1>Kanji</h1>
  //   //     <button>Next</button>
  //   //   </section>
  //   // </div>
  // );
