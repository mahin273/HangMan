import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useContext, useEffect } from "react";
import { WordContext } from "../context/WordContext";


export default function Home(){
    
    const {setWordList,setWord,wordHint,setWordHint}=useContext(WordContext)

    async function fetchWords(){
      const response = await fetch('http://localhost:3000/words');
        const data = await response.json();

        setWordList([...data])

        const random =Math.floor(Math.random() * data.length);
        const hint= data[random].wordHint;
        console.log("Random Hint is ",hint);
        console.log("Random Word is ",data[random].wordValue);
        setWord(data[random].wordValue);
        setWordHint(hint);
        

    }
    useEffect(()=>{
        fetchWords();
    },[])

    useEffect(()=>{
        localStorage.setItem('wordHint',JSON.stringify(wordHint));
    },[wordHint])

    return(
        <>
        
        <Link to="/play">
            <Button text="Single Player Game"/>
        </Link>
        <br/>
        <Link to="/start">
            <Button text="Multiplayer Game" styleType="error"/>
        </Link>
        </>

    )
}
 