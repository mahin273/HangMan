import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HangMan from "../components/HangMan/HangMan";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import MaskedText from "../components/MaskedText/MaskedText";

export default function PlayGame(){
    const {state} = useLocation();

    const[guessedLetters,setGuessedLetters]=useState([]);
    const[step,steStep]=useState(0);
    


    function handleLetterClick(letter){
        if(state?.toUpperCase().includes(letter)){
            console.log("Correct")
        }else{
            console.log("Wrong")
            steStep(step+1)
        }
        setGuessedLetters([...guessedLetters,letter])       
    }
    
    const wordHint = JSON.parse(localStorage.getItem("wordHint")) || "";

    return(
        <>
        <h1>Play Game</h1>
        <h2>Hint: {wordHint}</h2>
        {state &&(
            <>
            <MaskedText text={state?? ""} guessedLetters={guessedLetters}/>
        <div>
         <LetterButtons text={state} guessedLetters={guessedLetters} onLetterClick={handleLetterClick}/>  
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
 