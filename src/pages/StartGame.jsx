import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";


export default function StartGame(){
    return(
        <>
        <h1>Start Game</h1>

        <TextInputFormContainer />

    
        <Link to="/play" className="text-blue-700">Play games link</Link>
        </>
    );
}


{/*<></>  This is called react fragment */}
