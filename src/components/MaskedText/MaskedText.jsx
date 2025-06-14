import { getMaskedString } from "./MaskingUtility"

export default function MaskedText({text,gussedLetters}){
    const maskedString = getMaskedString(text,gussedLetters);
    return(
         <>
         {maskedString.map((letter,index)=>{
            return(
                <span key={index} className="mx-1">{letter}</span>
            )
         })}
         </>
    )
}
