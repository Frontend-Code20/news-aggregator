import { useEffect, useRef, useState } from 'react';

import InputField from './inputField';
import Spinner from '../spinner';

import { validateForm } from '../../helper/formValidation';
import { sendRequest } from '../../utils/requests';

function ForgetPassword(props) {

    const formRef = useRef(null);
    const buttonRef = useRef(null);
    const errorRef = useRef(null);

    const [spinner, setSpinner] = useState('hidden');

    const handleButtonClick =async (e) => {
        e.preventDefault();
        const validate = validateForm();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        if(validate){
            setSpinner('');
            buttonRef.current.disabled = true;
            const response = await sendRequest('/forget-password', {email});
            console.log(response);
            if(response.statusText === 'OK'){
                props.setCurrentForm('verification')
            }else{
                errorRef.current.innerHTML = response?.message;
            }
            buttonRef.current.disabled = false;
            setSpinner('hidden');
        }
    }

    useEffect(() => {

        formRef.current?.addEventListener('submit', handleButtonClick);
        
        return () => {
            formRef.current?.removeEventListener('submit', handleButtonClick);
        }

    }, [])

    return (
        <div className="w-full">
            <form className="text-white flex flex-col gap-4 py-8 px-4 validator" ref={formRef} noValidate>
                <p className="info-text">Enter The email associated with your account to receive a reset password mail</p>
                <InputField type={'email'} label={"Email"} id={"email"} name={"email"} placeholder={"Email"} />
                <div className={` text-sm text-orange-600`} ref={errorRef}></div>
                <button type="submit" className="bg-cyan-600 py-2 rounded-lg flex justify-center items-center gap-4 disabled:bg-cyan-800 disabled:cursor-not-allowed" ref={buttonRef}>
                    <div className={`${spinner}`}><Spinner size={"w-5 h-5"} id={"spinner"} /></div>
                    <span>Get Email</span>
                </button>
                <p className='text-center underline cursor-pointer' onClick={() => props.setCurrentForm('login')} >Back To Login</p>
            </form>
        </div>
    )

}

export default ForgetPassword;