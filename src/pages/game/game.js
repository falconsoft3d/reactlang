import React, { useState, useEffect } from "react";
import "./game.css";
import { useParams } from "react-router-dom";
import l2000s from "../../database/2000.json";

const TOTAL_WORD = 6;
const LINE_FOR_PAGE = 4;

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const GamePage = () => {
  const { name } = useParams();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(TOTAL_WORD / LINE_FOR_PAGE);
  const [right, SetRight] = useState(0);
  const [wrong, SetWrong] = useState(0);
  const [wordInThisPage, setWordInThisPage] = useState([]);

  const [leftArray, setLeftArray] = useState([]);
  const [rightArray, setRightArray] = useState([]);

  const GiveMeWords = () => {
    const ListWords = [];
    while (ListWords.length < LINE_FOR_PAGE) {
      const randomNumer = Math.floor(Math.random() * TOTAL_WORD);
      if (!ListWords.includes(randomNumer)) {
        ListWords.push(randomNumer);
      }
    }
    return ListWords;
  };

  const linesArray = Array.from(Array(LINE_FOR_PAGE).keys());

  useEffect(() => {
    const GiveMe = GiveMeWords();
    const rightArray = shuffle(Array.from(Array(LINE_FOR_PAGE).keys()));
    const leftArray = shuffle(Array.from(Array(LINE_FOR_PAGE).keys()));
    setLeftArray(leftArray);
    setRightArray(rightArray);
    setWordInThisPage(GiveMe);
  }, []);

  

  return ( 
    <div>
      <h3>Welcome to the React Router Tutorial</h3>
      <small>Game: {name}</small>
      { console.log(l2000s) }
      { console.log("linesArray:", linesArray) }
      { console.log("leftArray", leftArray )}
      { console.log("rightArray", rightArray )}
      { console.log("leftArray[0]", leftArray[0] )}
      { console.log("rightArray[0]", rightArray[0] )}
      { console.log("leftArray[1]", leftArray[1] )}
      { console.log("rightArray[1]", rightArray[1] )}
      
      { leftArray && rightArray && linesArray.map((pos) => (
        <LineButton key={pos}
           left={ (leftArray[pos]) ? l2000s[leftArray[pos]].left : 0}
           right={ (rightArray[pos]) ? l2000s[rightArray[pos]].right : 0 }
           // right={l2000s[rightArray[pos]].right}
          activeleft="true"
          activeright="true"
        />
      ))}
    </div>
  );
};

export default GamePage;

const LineButton = ({ left, right, activeleft, activeright }) => {
  return (
    <div className="ListButtton">
      <ButtonText text={left} active={activeleft} />
      <ButtonText text={right} active={activeright} />
    </div>
  );
};

const ButtonText = ({ text, active }) => {
  return (
    <div className={`btn ${active}`}>
      <p>{text}</p>
    </div>
  );
};
