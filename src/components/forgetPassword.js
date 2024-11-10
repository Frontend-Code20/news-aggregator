import { SendOTPEmail } from '../utils/handleForgetPassword';
import '../css/forgetAndOTP.css'

function ForgetPassword(props) {
    return (
        <div className="forget-password-box">
            <form className="forget-password-form">
                <p className="info-text">Enter The email associated with your account to receive a reset password mail</p>
                <div className='frg-email-box' id='frg-email-box'>
                    <input type="email" placeholder="Email" id='frg-email-input' className="input-box frg-email-box" />
                </div>
                <input type="submit" value={'Get Email'} className="get-email-btn large-btn" onClick={(event) => {
                    if(SendOTPEmail(event)){
                        props.setCurrentForm('verification');
                    }
                }}/>
                <p className='forget-back-btn' onClick={() => props.setCurrentForm('login')} >Back To Login</p>
            </form>
        </div>
    )

}

export default ForgetPassword;