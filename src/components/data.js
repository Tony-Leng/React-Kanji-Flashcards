import React from "react";
import Card from "./Card";

const Data = () => {
  const [kanjiList, setKanjiList] = useState([
    {
      id: 1,
      title: "日 (nichi, jitsu)",
      kanjiCh: "日",
      onyomi: "ニチ, ジツ",
      onromaji: "nichi, jitsu",
      kunyomi: "ひ, -び, -か",
      kunromaji: "hi, -bi, -ka",
      meaning: "Day, sun, Japan, counter for days",
      jlpt: "N5",
    },
    {
      id: 2,
      title: "一 (ichi)",
      kanjiCh: "一",
      onyomi: "イチ",
      onromaji: "ichi",
      kunyomi: "ひと(つ)",
      kunromaji: "hito(tsu)",
      meaning: "One",
      jlpt: "N5",
    },
    {
      id: 3,
      title: "国 (koku)",
      kanjiCh: "国",
      onyomi: "コク",
      onromaji: "koku",
      kunyomi: "くに",
      kunromaji: "kuni",
      meaning: "Country",
      jlpt: "N5",
    },
  ]);

  return (
    <div>
      <Card kanjiList={kanjiList} kanji="kanji goes here"/>
    </div>
  );
}

export default Data;

// export default function Data() {
//   return (
//     <div>
//       <Card kanji="日" />
//       <Card kanji="一" />
//       <Card kanji="国" />
//     </div>
//   )
// }
