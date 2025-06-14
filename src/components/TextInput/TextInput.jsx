export default function TextInput({label,type="text",placeholder="Enter input" ,onChangeHandler}){
    return(
        <label >
            <span className="text-gray-700">{label}</span>
            <input type={type}
            className="px-[1] py-[1]  border-2  border-gray-500 rounded-md w-full" 
            placeholder={placeholder}
            onChange={onChangeHandler}
            />
        </label>
    )
}
