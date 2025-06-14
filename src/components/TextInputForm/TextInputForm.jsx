import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

export default function  TextInputForm({inputType,handleFormSubmit,handleTextInputChange,handleShowHideClick}){

    return(
       <form onSubmit={handleFormSubmit}>
        <div>
            <TextInput 
            type={inputType}
            label="Enter Here:"
            placeholder="Enter a Word here"
            onChangeHandler={handleTextInputChange}
            />
        </div>
        <div>
            <Button 
            styleType="warning"
            text={inputType==="password"?"Show":"Hide"}
            onClickHandler={handleShowHideClick}
            />
        </div>

        <div>
        <Button
            type="submit"
            styleType="primary"
            text = "Submit"
        />

        </div>

       </form>
    )
}
