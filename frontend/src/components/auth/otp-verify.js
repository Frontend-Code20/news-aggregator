import { useEffect, useRef, useState } from 'react';
import { getOTPValue, moveToNext, moveToPrevious, resetTimer, setTimeInterval } from '../../utils/utils';
import Spinner from '../spinner';
import { validateOTP } from '../../helper/formValidation';
import { sendRequest } from '../../utils/requests';

function OTP_Verify(props) {

    const [spinner, setSpinner ] = useState('hidden');
    
    const buttonRef = useRef(null);
    const resendTimeRef = useRef(null);
    const resendRef = useRef(null);
    
    const handleVerify = async (e) => {
        e.preventDefault();
        const inputs = document.querySelectorAll('.num-input');
        const validate = validateOTP(inputs);
        if(validate){
            setSpinner('');
            buttonRef.current.disabled = true;
            const OTP = getOTPValue(inputs);
            const response = await sendRequest('/OTP-verify', {OTP});
            if(response.statusText === "OK"){
                props.setCurrentForm('changePassword');
            }
            buttonRef.current.disabled = false;
            setSpinner('hidden');
            console.log(OTP);
        }
    }

    const handleResend = (e) =>{
        e.preventDefault();
        resetTimer(2);
    }

    const setTimer = () => {
        setTimeInterval(resendTimeRef.current, resendRef.current);
    }

    useEffect(() => {

        const inputs = document.querySelectorAll('.num-input');
        Object.keys(inputs).forEach((key, idx) => {
            inputs[key].addEventListener('input', (event) => {
                moveToNext(inputs, idx);
                validateOTP(inputs)
            });
        })
        Object.keys(inputs).forEach((key, idx) => {
            inputs[key].addEventListener('keydown', (event) => {
                validateOTP(inputs)
                moveToPrevious(inputs, idx, event);
            });
        })

        setTimer()
        // setTimeInterval(resendTimeRef.current);

    }, []);

    return (
        <div className="otp-box">
            <form className='px-4 py-8 text-white flex flex-col gap-4'>
                <h3 className='text-center'>OTP Verification</h3>
                <p className="text-center text-xs">We Have Sent A 4 Digit Code To Your Email Address</p>
                <div className="flex justify-evenly w-full box-border px-10">
                    <input type="text" className="num-input w-8 h-8 rounded-md text-black text-center outline-none" />
                    <input type="text" className="num-input w-8 h-8 rounded-md text-black text-center outline-none" />
                    <input type="text" className="num-input w-8 h-8 rounded-md text-black text-center outline-none" />
                    <input type="text" className="num-input w-8 h-8 rounded-md text-black text-center outline-none" />
                    <input type="text" className="num-input w-8 h-8 rounded-md text-black text-center outline-none" />
                    <input type="text" className="num-input w-8 h-8 rounded-md text-black text-center outline-none" />
                </div>
                <p className="text-center" ref={resendTimeRef}>0:00</p>
                <p className="text-center text-sm">Don't Receive The OTP? <button className={`cursor-pointer underline text-blue-400 disabled:text-gray-500 outline-none`} ref={resendRef} disabled onClick={handleResend}>Resend OTP</button></p>
                <button type='submit' className='w-full bg-cyan-600 py-2 rounded-lg flex justify-center items-center gap-4 disabled:bg-cyan-800 disabled:cursor-not-allowed' onClick={handleVerify} ref={buttonRef}>
                    <div className={`${spinner}`}><Spinner size={"w-5 h-5"} id={"spinner"} /></div>
                    <span>Verify</span>
                </button>
                <p className='text-center cursor-pointer underline' onClick={() => props.setCurrentForm('login')}>Go back to login</p>
            </form>
        </div>
    )

}

export default OTP_Verify;