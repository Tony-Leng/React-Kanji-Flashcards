import React from 'react';

export default function Button(props) {
  const getKanji = props.getKanji;

  return (
    <div className='buttons'>
      <button onClick={getKanji} className='buttons-nextkanji'>
        <h3>Next Kanji</h3>
      </button>
      <button className='buttons-filterkanji'>
        <h3>Filter Kanji</h3>
      </button>
    </div>
  )
}
