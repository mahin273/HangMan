
const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');

export default function LetterButtons({text,guessedLetters,onLetterClick}){
    
    const originalLetters = new Set(text.toUpperCase().split(''));
    const guessedLetterSet = new Set(guessedLetters);

    const buttonStyle = function(letter){
        if(guessedLetterSet.has(letter)){
            return `${originalLetters.has(letter)? 'bg-green-500' : 'bg-red-500'}`;
        }else{
            return 'bg-blue-500'
        }
    }

    function handleLetterClick(event){
        const characterOfTheLetter = event.target.value;
        onLetterClick?.(characterOfTheLetter)

    }

    const button =ALPHABETS.map(letter=>{

        return(
            <button 
            key={`button-${letter}`}
            value={letter}
            onClick={handleLetterClick}
            disabled={guessedLetterSet.has(letter)}
            className={`h-12 w-12 text-white m-1 rounded-md px-1 ${buttonStyle(letter)}`}
            >
                {letter}
            </button>
        )
    })

    return(
        <>
        {button}
        </>
        
    )
}
