import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

export default function TextInputFormContainer(){

    // let inputType = "password"
    const[inputType,setInputType]=useState("password")
    const[value,setValue]=useState("");
    
    const navigate = useNavigate();

        function handleFormSubmit(event){
            event.preventDefault();
            console.log("From Submitted",value)
            if(value){
                navigate("/play",{state:value})
            }
        }
     
        function handleTextInputChange(event){
            console.log("Text Input Changed");
            console.log("EVENT IS  ",event.target.value)
            setValue(event.target.value)
        }

        function handleShowHideClick(){
            console.log("Show/Hide button clicked")
            if(inputType==="password"){
                setInputType("text")
            }else{
               setInputType("password")
            }
            console.log(inputType)
        }

    return(
    <TextInputForm
    inputType={inputType}
    handleFormSubmit={handleFormSubmit}
    handleTextInputChange={handleTextInputChange}
    handleShowHideClick={handleShowHideClick}
    />
    )
}
