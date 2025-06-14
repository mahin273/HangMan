import getButtonStyling from "./getButtonStyling" 
export default function Button({text,onClickHandler,styleType="primary",type="button"}){
    console.log(text)
    return(
        <button
        type={type}
        onClick={onClickHandler}
        className={`text-white ${getButtonStyling(styleType)} py-2 px-2 rounded-2xl mx-2 my-2 border-2`}
        >
            {text}
        </button>
    )
}
