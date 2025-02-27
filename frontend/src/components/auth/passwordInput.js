import { useState } from "react";

function PasswordInput({ label, id, placeholder, name, errorMessage }) {

    const [showPassword, setShowPassword] = useState('password');

    const handleIconClick = () => {
        if (showPassword === 'password') {
            setShowPassword('text');
        } else {
            setShowPassword('password');
        }
    }

    return (
        <div className="box-border form-group">
            <label htmlFor="password" className="sr-only">{label}</label>
            <div className="w-full flex border border-cyan-600 pe-3 items-center rounded-md form-input">
                <input type={showPassword} placeholder={placeholder} name={name} className="w-full h-10 bg-transparent ps-2 outline-none" id={id} required />
                <img alt="show" src={`/icons/${showPassword === 'text' ? "show.png" : "hide.png"}`} className="h-6 w-6" onClick={handleIconClick} />
            </div>
            <div className="invalid-feedback text-sm text-red-500 mt-1 hidden">{errorMessage}</div>
        </div>
    )
}

export default PasswordInput;