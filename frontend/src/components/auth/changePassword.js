import PasswordInput from "./passwordInput";
import Spinner from "../spinner";
import { useEffect, useRef, useState } from "react";
import { validateForm, comparePassword } from "../../helper/formValidation";
import { useNavigate } from 'react-router';
import { sendRequest } from "../../utils/requests";

function ChangePassword(props) {

    const formRef = useRef(null);
    const buttonRef = useRef(null);
    const errorRef = useRef(null);

    const [spinner, setSpinner] = useState('hidden')

    const navigate = useNavigate();

    useEffect(() => {

        formRef.current?.addEventListener('submit', handlePasswordNewPassword);

        return () => {
            formRef.current?.addEventListener('submit', handlePasswordNewPassword);
        }

    }, []);

    const handlePasswordNewPassword = async (e) => {
        e.preventDefault();
        const validate = validateForm()
        const compare = comparePassword();
        const formData = new FormData(e.target);
        const password = formData.get('password')
        if (validate && compare) {
            setSpinner('');
            buttonRef.current.disabled = true;
            const response = await sendRequest('/change-password', {password});
            if(response.statusText === 'OK'){
                navigate('/');
            }else{
                errorRef.current.innerHTML = response?.message;
            }
            setSpinner('hidden');
            buttonRef.current.disabled = false;
        }
    }

    return (
        <div className="reset-password-box">
            <form className="text-white flex flex-col gap-4 py-8 px-4 validator" ref={formRef} noValidate>
                <PasswordInput label={"Password"} id={"password"} name={"password"} placeholder={"New Password"} />
                <PasswordInput label={"Confirm Password"} id={"confirmPassword"} name={"confirmPassword"} placeholder={"Confirm Password"} />
                <div className="text-sm text-orange-600" ref={errorRef}></div>
                <button type="submit" className="bg-cyan-600 py-2 rounded-lg flex justify-center items-center gap-4 disabled:bg-cyan-800 disabled:cursor-not-allowed" ref={buttonRef}>
                    <div className={`${spinner}`}><Spinner size={"w-5 h-5"} id={"spinner"} /></div>
                    <span>Update Password</span>
                </button>
            </form>
        </div>
    )
}

export default ChangePassword;