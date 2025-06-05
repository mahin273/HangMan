import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer(){

    const[inputType,setInputType]=useState('password');
    const[value,setValue]=useState('');

    const navigate = useNavigate();

function handleFormSubmit(event){
            console.log("handleFormSubmit called");
            event.preventDefault();
            console.log("Form Submitted",value);
            if(value){
                navigate('/play')
            }
    } 

    function handleTextInputChange(event){
            console.log("text input changed");
            console.log(event);
            console.log(event.target)
            console.log(event.target.value)
            setValue(event.target.value)
    }


    function handleShowHideClick(){
        console.log("Show/Hide Clicked")
        if(inputType==='password'){
            setInputType('text')
        }else{
            setInputType('password')
        }
    }
    return(
        <TextInputForm
        inputType={inputType}
        handleFormSubmit ={handleFormSubmit}
        handleTextInputChange={handleTextInputChange}
        handleShowHideClick ={handleShowHideClick} />
    )
}

export default TextInputFormContainer;
