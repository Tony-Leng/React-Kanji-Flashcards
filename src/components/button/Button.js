import React from 'react';

export default function Button(props) {
  const getKanji = [props.getKanji]

  return (
    <button onClick={ getKanji }>Next Kanji</button>
  )
}
