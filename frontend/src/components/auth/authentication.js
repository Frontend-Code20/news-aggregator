import React, { useState } from "react";
import Login from "./Login";
import Signup from "./signup";
import OTP_Verify from "./otp-verify";
import ForgetPassword from './forgetPassword';
import ChangePassword from './changePassword'

function Authentication(props) {

    const [currentForm, setCurrentForm] = useState('login');

    const fromComponents = {
        login: <Login setCurrentForm={setCurrentForm} />,
        signup: <Signup setCurrentForm={setCurrentForm} />,
        forgetPassword: <ForgetPassword setCurrentForm={setCurrentForm} />,
        verification: <OTP_Verify setCurrentForm={setCurrentForm} />,
        changePassword: <ChangePassword setCurrentForm={setCurrentForm} />
    }

    const formHeadbutton = <>
        <button className={`${currentForm === 'login' ? "text-white" : 'text-black'} uppercase`} onClick={() => setCurrentForm('login')}>Login</button>
        <button className={`${currentForm === 'signup' ? "text-white" : 'text-black'} uppercase `} onClick={() => setCurrentForm('signup')}>SignUp</button>
    </>

    const formHead = currentForm === 'forgetPassword' ? 'Forget Password' : currentForm === 'verification' ? 'OTP Verification' :
        currentForm === 'changePassword' ? 'Change Password' : formHeadbutton;


    return (
        <div className="w-full h-full relative bottom-0 bg-darkNavyBlue flex justify-center overflow-hidden">
            <div className="box-border flex flex-col w-full pt-10 md:max-w-sm h-full">
                <div className="w-full flex justify-evenly bg-cyan-600 py-5 rounded-tl-full rounded-tr-full">
                    {formHead}
                </div>
                <div className="w-full border h-full">
                    {fromComponents[currentForm]}
                </div>
            </div>
        </div>
    )
}
export default Authentication;