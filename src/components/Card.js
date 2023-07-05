import React from "react";

const Card = (props) => {
  const kanjiList = props.currentKanji;

  return (
    <div>
      {kanjiList.map((kanji) => (
        <div>{ kanji.character }</div>
      ))}
      <button>Next Kanji</button>
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
