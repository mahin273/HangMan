import { Link ,useLocation} from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";

export default function PlayGame(){
    const {state} = useLocation();
    
    return(
        <>
        <h1>Play Game</h1>
        <p>Received value: {state}</p>
        <MaskedText text={state} gussedLetters={[]}/>
        <Link to="/start" className="text-blue-700"> Start games Link</Link>
        </>
    )
}
 