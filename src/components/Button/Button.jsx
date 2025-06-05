import getButtonStyling from "./getButtonStyling";
function Button({text,onClickHandler,styleType="primary", type="button"}){

    return(
       <button onClick ={onClickHandler}
       type={type}
        className={`text-white ${getButtonStyling(styleType)}  px-4 py-2 mx-2 my-2 rounded-md`}
       >
        {text}
        </button>
    );
}

export default Button;
