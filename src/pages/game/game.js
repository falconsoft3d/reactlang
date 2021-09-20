import React, { useState, useEffect } from "react";
import "./game.css";
import { useParams } from "react-router-dom";
import l2000s from "../../database/2000.json";
import {
  Link,
} from "react-router-dom";

const TOTAL_WORD = 1000;
const LINE_FOR_PAGE = 10;

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
  const [totalPage, setTotalPage] = useState( Math.ceil(TOTAL_WORD / LINE_FOR_PAGE) );
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [wordInThisPage, setWordInThisPage] = useState([]);
  const [clickArray, setClickArray] = useState([]);

  const [leftArray, setLeftArray] = useState([]);
  const [rightArray, setRightArray] = useState([]);

  const [linesArray, setLinesArray] = useState([]);

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

  // const linesArray = range(page-1, LINE_FOR_PAGE-1);
  useEffect(() => {
    const fini = (page-1)*LINE_FOR_PAGE
    const fend = fini+10-1
    setLinesArray(range(fini, fend));
    const GiveMe = GiveMeWords();
    const rightArray = shuffle(range(fini, fend));
    const leftArray = shuffle(range(fini, fend));
    setLeftArray(leftArray);
    setRightArray(rightArray);
    setWordInThisPage(GiveMe);
  }, [page]);

  useEffect(() => {
    const alength = clickArray.length
    if (alength > 1) {
      if (checkArray(clickArray)) {
        setRight(right+1)
      } else {
        setWrong(wrong+1)
      }
      setClickArray([])
    }
  }, [clickArray]);

  if (leftArray.length === 0 ) return null;
  const linesArray2 = [0,1,2,3,4,5,6,7,8,9]
  return ( 
    <div>
      <GameHeader title={name} right={right} wrong={wrong} />
      { leftArray && rightArray && linesArray2.map((pos) => (

        <LineButton key={pos} page={page}
             left={l2000s[leftArray[pos]] ? l2000s[leftArray[pos]].left : 0}
             right={l2000s[rightArray[pos]] ? l2000s[rightArray[pos]].right : 0}
          activeleft="true"
          activeright="true"
          clickArray={clickArray}
          setClickArray={setClickArray}
        />

      ))}

      <GameFooter thispage={page} totalPage={totalPage} page={page}  setPage={setPage} totalPage={totalPage}/>
    </div>
  );
};

export default GamePage;

const LineButton = ({ left, right, clickArray, setClickArray, page }) => {
  const [activeLeft, setActiveLeft] = useState(true);
  const [activeRight, setActiveRight] = useState(true);
  return (
    <div className="ListButtton">
      <ButtonText pos="left"
                  page={page}
                  text={left} 
                  active={activeLeft}
                  setActiveLeft={setActiveLeft}
                  clickArray={clickArray} setClickArray={setClickArray}/>
      
      <ButtonText pos="right"
                  page={page}
                  text={right} 
                  active={activeRight}
                  setActiveRight={setActiveRight}
                  clickArray={clickArray} setClickArray={setClickArray}/>
    </div>
  );
};

const ButtonText = ({ text, active, setActiveLeft, setActiveRight, clickArray, setClickArray, pos, page }) => {
  
  useEffect(() => {
    pos==="left" ? setActiveLeft(true) : setActiveRight(true)
  }, [page])

  const handleClick = () =>  {
      if (active) {
        const alength = clickArray.length
        if (alength <= 1) {
          setClickArray(clickArray => [...clickArray, text])
        }
        pos==="left" ? setActiveLeft(false) : setActiveRight(false)
      } 
      else {
        setClickArray([])
      }
  }

  return (
    <div className={`btn ${active}`}  onClick={handleClick} >
      <p>{text}</p>
    </div>
  );
};


const GameHeader = ({title, right, wrong}) => {

  return (
    <>
    <div className="header-game">
        <div className="header-game-begin"><Link to="/" className="white">Begin</Link> </div>
        <div className="header-game-title">{title}</div>
        <div className="header-game-look" > M.F.H </div>
    </div>
    <div className="header-game-down">
        <div className="header-game-title">{right} Right / {wrong} wrong / {TOTAL_WORD}</div>
    </div>
    </>
  )
}


const GameFooter = ({thispage, totalPage, page,setPage}) => {
  const handleNext = () =>  {
    setPage(page+1);
  }
  const handlePrev = () =>  {
    setPage(page-1);
  }


  return (
  <div className="footer-wrapper">
    <div className="footer-game">
      { page === 1 ? ( <div className="footer-prev">...</div> ) :   ( <div className="footer-prev" onClick={handlePrev}>PREV</div> ) }
        
        
        <div className="footer-pages">Page {thispage}/{totalPage}</div>
        
        { page < totalPage ? (<div className="footer-prev" onClick={handleNext}>NEXT</div>) 
        : <div className="footer-prev">....</div> }
    </div>
  </div>  )
}


const checkArray = (arrayToCheck) => {
    const right = l2000s.find(x => x.left === arrayToCheck[0]) && l2000s.find(x => x.left === arrayToCheck[0]).right;
    const left = l2000s.find(x => x.right === arrayToCheck[0]) && l2000s.find(x => x.right === arrayToCheck[0]).left;
    const value = right || left
    if (value === arrayToCheck[1]) {
      return true
    } else {
      return false
    }
}


function range(start, end) {
  var foo = [];
  for (var i = start; i <= end; i++) {
      foo.push(i);
  }
  return foo;
}