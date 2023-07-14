import React from 'react';

export default function Button(props) {
  const getKanji = props.getKanji;

  return (
    <button onClick={getKanji}>
      <h3>Next Kanji</h3>
    </button>
  )
}
