function InputField({type, label, id, placeholder, name, errorMessage}) {

    return (
        <div className="w-full box-border form-group">
            <label htmlFor={id} className="sr-only">{label}</label>
            <input type={type ? type : "text" } className="w-full h-10 rounded-md border border-cyan-600 bg-transparent ps-3 outline-none form-input" name={name} placeholder={placeholder} id={id} required />
            <div className="invalid-feedback text-sm text-red-500 mt-1 hidden">{errorMessage}</div>
        </div>
    )
}

export default InputField;