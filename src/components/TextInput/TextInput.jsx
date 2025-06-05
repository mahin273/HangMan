function TextInput({type="text",label,placeholder="Enter your Input Here",onChangeHandler}){
    return(
        <label>
           <span className="text-gray-700">{label}</span>
            <input
                type={type}
                className="px-4 py-2 border border-green-400 rounded-md w-full"
                placeholder={placeholder}

                onChange={onChangeHandler}
            />
        </label>
    )
}

export default TextInput;
