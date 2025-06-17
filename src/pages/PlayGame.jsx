import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import HangMan from "../components/HangMan/HangMan";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import MaskedText from "../components/MaskedText/MaskedText";
import { WordContext } from "../context/WordContext";
import useWordStore  from "../stores/WordStore";


export default function PlayGame(){
    // const{word}=useContext(WordContext)
    const{wordList,word}=useWordStore()
    const[guessedLetters,setGuessedLetters]=useState([]);
    const[step,steStep]=useState(0);
    
    


    function handleLetterClick(letter){
        if(word?.toUpperCase().includes(letter)){
            console.log("Correct")
        }else{
            console.log("Wrong")
            steStep(step+1)
        }
        setGuessedLetters([...guessedLetters,letter])       
    }
    const maxStep = word?.length;
    const isGameOver = step >= maxStep;
    const isGameWon = word?.split("").every(letter => guessedLetters.includes(letter.toUpperCase()));
    if(isGameOver || isGameWon){
        return(
            <>
            <h1>{isGameWon ? "You Won!" : "Game Over!"}</h1>
            {wordList.map((word) => {
                console.log("wordList from store:", wordList)
                return <li key={word.id}>{word.wordValue}</li>
            })}

            <Link to="/" className="text-blue-700"> Home Link</Link>
            <br/>
            <Link to="/start" className="text-blue-700"> Start games Link</Link>
            </>
        )
    }

    const wordHint = JSON.parse(localStorage.getItem("wordHint")) || "";

    return(
        <>
        <h1>Play Game</h1>
        {/* {wordList.map((word) => {
    return <li key={word.id}>{word.wordValue}</li> // This assumes each item has .id and .wordValue
})} */}
        <h2>Hint: {wordHint}</h2>
        {word &&(
            <>
            <MaskedText text={word?? ""} guessedLetters={guessedLetters}/>
        <div>
         <LetterButtons text={word} guessedLetters={guessedLetters} onLetterClick={handleLetterClick}/>  
        </div>
        <div>
            <HangMan step={step}/>
        </div>
        
            </>
        )}
        <Link to="/" className="text-blue-700"> Home Link</Link>
        <br/>
        <Link to="/start" className="text-blue-700"> Start games Link</Link>
        </>
    )
}
 