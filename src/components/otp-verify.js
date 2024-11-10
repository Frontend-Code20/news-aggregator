import { useEffect } from 'react';
import '../css/forgetAndOTP.css'
import { moveToNext, moveToPrevious } from '../utils/utils';

function OTP_Verify(props) {

    useEffect(() => {

        const inputs = document.querySelectorAll('.num-input');
        Object.keys(inputs).forEach((key, idx) => {
            inputs[key].addEventListener('input', (event) => {
                   moveToNext(inputs, idx);
            });
        })
        Object.keys(inputs).forEach((key, idx) => {
            inputs[key].addEventListener('keydown', (event) => { 
                   moveToPrevious(inputs, idx, event); 
            });
        })

    }, []);

    return (
        <div className="otp-box">
            <h3>OTP Verification</h3>
            <p className="info-text">We Have Sent A 4 Digit Code To Your Email Address</p>
            <div className="otp-input-box">
                <input type="number" className="num-input" />
                <input type="number" className="num-input" />
                <input type="number" className="num-input" />
                <input type="number" className="num-input" />
            </div>
            <p className="opt-time">0:00</p>
            <p className="resend-text">Don't Receive The OTP? <span className="resend-btn">Resend OTP</span></p>
            <input type="submit" value={'Verify Now'} className="large-btn verify-btn" onClick={() => props.setCurrentForm('changePassword')} />
            <p className='opt-back-btn' onClick={() => props.setCurrentForm('login')}>Go back to login</p>
        </div>
    )

}

export default OTP_Verify;