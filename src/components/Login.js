import React, { useEffect, useState } from "react";
import '../css/login.css';
import { checkLogin } from "../utils/handleLogin";

function Login(props) {

    const [showPass, setShowPass] = useState(false);
    const showPassword = (event) => {
        if(showPass){
            event.target.previousSibling.type = 'text';
            event.target.src = '/icons/show.png';
            setShowPass(false);
        }else{
            event.target.previousSibling.type = 'password';
            event.target.src = '/icons/hide.png';
            setShowPass(true);
        }
    }

    return (
        <div className="login-box">
            <form className="login-form">
                <div className="username-box" id="username-box"> 
                    <input type="text" className="input-box" placeholder="Username" id="username" />
                </div>
                <div id="password-box">
                    <div className="input-box password-input-box">
                        <input type="password" placeholder="Password" className="password-input" id="password" />
                        <img alt="show" src="/icons/hide.png" className="show-password" onClick={(event) => showPassword(event)}/>
                    </div>
                </div>
                <div className="frg-remb-box">
                    <div className="remember-box">
                        <input type="checkbox" className="checkbox" />
                        <span>Remember Me</span>
                    </div>
                    <span className="forget-password" onClick={() => props.setCurrentForm('forgetPassword')}>Forget Password?</span>
                </div>
                <input type="submit" value={'Login'} className="login-btn" onClick={(event) => {
                    checkLogin(event);
                }} />
                <p className="dont-have-acc-text">Don't have An Account? <span className="to-signup-btn" onClick={() => props.setCurrentForm('signup')}>Sign Up</span></p>
            </form>
        </div>
    )
}
export default Login;