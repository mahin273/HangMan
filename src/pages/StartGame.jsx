import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";
function StartGame(){
    return(
        <>
            <h1>Start Game</h1>
            <TextInputFormContainer />
            <Link to='/play' className="text-blue-400">Play Games</Link>
            {/* write comment here */}
        </>
    )
}

export default StartGame;
