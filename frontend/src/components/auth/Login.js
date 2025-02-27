import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router'

import InputField from "./inputField";
import PasswordInput from "./passwordInput";
import Spinner from "../spinner";

import { validateForm } from "../../helper/formValidation";
import { sendRequest } from "../../utils/requests";

function Login(props) {

    const navigate = useNavigate();

    const formRef = useRef(null);
    const buttonRef = useRef(null);
    const errorRef = useRef(null);

    const [spinner, setSpinner] = useState('hidden')

    useEffect(() => {

        const form = formRef.current;
        form?.addEventListener('submit', handleSubmit);

        return () => {
            form?.removeEventListener('submit', handleSubmit);
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validate = validateForm();
        console.log(validate);
        if (validate) {
            const formData = new FormData(event.target);
            const email = formData.get('email')
            const password = formData.get('password');
            buttonRef.current.disabled = true;
            setSpinner('')
            const response = await sendRequest('/login', { email: email, password: password });
            console.log(response);
            if (response.statusText === 'OK') {
                const { token } = response.data;
                window.sessionStorage.setItem('token', token)
                navigate('/tags');
            } else {
                errorRef.current.innerHTML = response.message;
            }
            buttonRef.current.disabled = false;
            setSpinner('hidden')
        }
    }


    return (
        <div className="w-full">
            <form className="w-full text-white flex flex-col gap-3 pt-6 px-4 h-full validator" ref={formRef} noValidate>
                <InputField type={'email'} label={"Email"} id={"email"} name={'email'} placeholder={"Email"} errorMessage={"Please enter email."} />
                <PasswordInput label={"Password"} id={"password"} name={'password'} placeholder={"Password"} errorMessage={"Please enter your password"} />
                <div className="text-sm text-orange-500" ref={errorRef}></div>
                <div className="flex justify-between mt-5">
                    <div className="flex gap-1 items-center">
                        <input type="checkbox" className="h-4 w-4 bg-cyan-600" />
                        <span>Remember Me</span>
                    </div>
                    <span className="cursor-pointer underline" onClick={() => props.setCurrentForm('forgetPassword')}>Forget Password?</span>
                </div>
                <button type="submit" ref={buttonRef} className="bg-cyan-600 h-10 rounded-md flex justify-center items-center gap-4 disabled:bg-cyan-800 disabled:cursor-not-allowed" >
                    <div className={`${spinner}`}><Spinner size={"w-5 h-5"} id={"spinner"} /></div>
                    <span>Login</span>
                </button>
                <p className="text-center">Don't have An Account? <span className="underline cursor-pointer" onClick={() => props.setCurrentForm('signup')}>Sign Up</span></p>
            </form>
        </div>
    )
}
export default Login;