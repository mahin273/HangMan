import { Link } from "react-router-dom";

export default function PlayGame(){
    return(
        <>
        <h1>Play Game</h1>
        <Link to="/start" className="text-blue-700"> Start games Link</Link>
        </>
    )
}
