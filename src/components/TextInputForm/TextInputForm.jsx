import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({handleFormSubmit,handleTextInputChange,handleShowHideClick,inputType}){


    return(
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput
            type={inputType}
            label="Enter a word"
            placeholder ="Enter a Word  here ..."
            onChangeHandler={handleTextInputChange}
        />
            </div>

            <div>
                <Button
                    styleType="warning"
                    text={inputType ==='password'?"SHOW":"HIDE"}
                    onClickHandler={handleShowHideClick}

                />
            </div>

            <div>
                <Button
                    type="submit"
                    styleType="primary"
                    text="Submit"                />
            </div>
        </form>

    );
}

export default TextInputForm;
