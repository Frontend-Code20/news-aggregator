import React, { useState } from "react";
import Login from "./Login";
import Signup from "./signup";
import OTP_Verify from "./otp-verify";
import ForgetPassword from './forgetPassword';
import ChangePassword from './changePassword'
import '../css/loginSignup.css'

function Login_Signup(props) {

    const [currentForm, setCurrentForm] = useState('login');

    const getCurrentForm = () => {
        let form = null;
        let formHead = null;

        const btnHead = <div className="button-box">
            <button className={currentForm === 'login' ? "form-button active" : 'form-button'} id="to-login-form-btn" onClick={() => setCurrentForm('login')}>Login</button>
            <button className={currentForm === 'signup' ? "form-button active" : 'form-button'} id="to-signup-form-btn" onClick={() => setCurrentForm('signup')}>SignUp</button>
        </div>

        switch (currentForm) {
            case 'login':
                form = <Login setCurrentForm={setCurrentForm} />
                formHead = btnHead;
                break;
            case 'signup':
                form = <Signup setCurrentForm={setCurrentForm} />
                formHead = btnHead;
                break;
            case 'forgetPassword':
                form = <ForgetPassword setCurrentForm={setCurrentForm} />
                formHead=<div className="form-heading-box"><h2>Forget Password</h2></div>
                break;
            case 'verification':
                form = <OTP_Verify setCurrentForm={setCurrentForm} />
                formHead=<div className="form-heading-box"><h2>OPT verification</h2></div>
                break;
            case 'changePassword':
                form = <ChangePassword setCurrentForm={setCurrentForm} />
                formHead=<div className="form-heading-box"><h2>Reset Password</h2></div>
                break;
            default:
                form = null
                break;

        }
        return {form , formHead};
    }
    return (
        <div className="login-signup-container">
            <div className="login-signup-box">
                {getCurrentForm().formHead}
                <div className="forms-box">
                    {getCurrentForm().form}
                </div>
            </div>
        </div>
    )
}
export default Login_Signup;