import { Link ,useLocation} from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";

export default function PlayGame(){
    const {state} = useLocation();

    const[guessedLetters,setGuessedLetters]=useState([])

    function handleLetterClick(letter){
        setGuessedLetters([...guessedLetters,letter])       
    }
    
    
    return(
        <>
        <h1>Play Game</h1>
        <MaskedText text={state} guessedLetters={guessedLetters}/>
        <div>
         <LetterButtons text={state} guessedLetters={guessedLetters} onLetterClick={handleLetterClick}/>  
        </div>
        
        <Link to="/start" className="text-blue-700"> Start games Link</Link>
        </>
    )
}
 