import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

import PasswordInput from "./passwordInput";
import InputField from './inputField'
import SocialLinks from "./socialLinks";
import Spinner from "../spinner";

import { validateForm, comparePassword } from "../../helper/formValidation";
import { sendRequest } from "../../utils/requests";

function Signup(props) {

    const formRef = useRef(null);
    const buttonRef = useRef(null);
    const errorRef = useRef(null);

    const navigate = useNavigate();

    const [spinner, setSpinner] = useState('hidden');

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const validte = validateForm();
        const compare = comparePassword();
        console.log(validte, compare);
        
        if(validte && compare){
            setSpinner('')
            buttonRef.current.disabled = true;
            
            const formData = new FormData(event.target);
            const firstName = formData.get('firstName')
            const lastName = formData.get('lastName');
            const email = formData.get('email');
            const password = formData.get('password');
            const response = await sendRequest('/register', {firstName, lastName, email, password});
            console.log(response);
            if(response?.statusText === 'OK'){
                const {token} = response.data;
                window.sessionStorage.setItem('token', token);
                navigate('/tags')
            }else{
                errorRef.current.innerHTML = response?.message;
            }
            
            buttonRef.current.disabled = false;
            setSpinner('hidden');
        }
    }

    useEffect(() => {

        formRef.current?.addEventListener('submit', handleFormSubmit);
        
        return () => {
            formRef.current?.removeEventListener('submit', handleFormSubmit);
        }
    }, [])

    return (
        <div className="text-white w-full h-full">
            <form className="w-full box-border px-4 flex flex-col gap-4 pt-5 pb-32 h-full overflow-auto scrollbar-y-2 validator" ref={formRef} noValidate>
                <InputField label={"First Name"} id={"first-name"} name={'firstName'} placeholder={"First Name"} errorMessage={"Please enter first name"}/>
                <InputField label={"Last Name"} id={"last-name"} name={'lastName'} placeholder={"Last Name"} errorMessage={"Please enter last name"}/>
                <InputField type={"email"} label={"Email"} id={"email"} name={'email'} placeholder={"Email"} errorMessage={"Please enter your email"}/>
                <PasswordInput label={"Password"} id={'password'} name={'password'} placeholder={"Password"}/>
                <PasswordInput label={"Confirm Password"} id={'confirmPassword'} placeholder={"Confirm Password"}/>
                <div className="text-sm text-orange-600" ref={errorRef}></div>
                <button type="submit" className="bg-cyan-600 py-2 rounded-md flex justify-center items-center gap-4 disabled:bg-cyan-800 disabled:cursor-not-allowed" ref={buttonRef}>
                    <div className={`${spinner}`}><Spinner size={"w-5 h-5"} id={"spinner"}/></div>
                    <span>Signup</span>
                </button>
                <p className="text-center">Already have an account <span className="underline cursor-pointer" onClick={() => props.setCurrentForm('login')}>Sign In</span></p>
                <p className="text-center">Or Continue with</p>
                <SocialLinks />
            </form>
        </div>
    )
}

export default Signup;