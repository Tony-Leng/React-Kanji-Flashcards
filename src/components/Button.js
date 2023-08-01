import React from 'react';

export default function Button(props) {
  const getKanji = props.getKanji;

  return (
    <div className='buttons'>
      <button onClick={getKanji}>
        <h3>Next Kanji</h3>
      </button>
      <button>
        <h3>Filter Kanji</h3>
      </button>
    </div>
  )
}
