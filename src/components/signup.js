import { useState } from "react";

// The CSS of the component is in the Login.css

function Signup(props) {

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
        <div className="signup-box">
            <form className="signup-form">
                <div className="firstname-box username-box">
                    <input type="text" className="input-box" placeholder="First Name" />
                </div>
                <div className="lastname-box username-box">
                    <input type="text" className="input-box" placeholder="Last Name" />
                </div>
                <div className="email-box username-box">
                    <input type="text" className="input-box" placeholder="Email" />
                </div>
                <div className="input-box password-input-box">
                    <input type="password" placeholder="Password" className="password-input" />
                    <img alt="show" src="/icons/hide.png" className="show-password" onClick={(event) => showPassword(event)} />
                </div>
                <div className="input-box password-input-box">
                    <input type="password" placeholder="Confirm Password" className="password-input" />
                    <img alt="show" src="/icons/hide.png" className="show-password" onClick={(event) => showPassword(event)}  />
                </div>
                <input type="submit" value={'Signup'} className="signup-btn" />
                <p className="have-acc-text">Already have an account <span className="to-login-btn" onClick={() => props.setCurrentForm('login')}>Sign In</span></p>
                <p className="link-icons-heading">Or Continue with</p>
                <div className="accounts-link-box">
                    <img src="/icons/google.png" alt="" className="link-icon" />
                    <img src="/icons/facebook.png" alt="" className="link-icon" />
                    <img src="/icons/apple.png" alt="" className="link-icon" />
                </div>
            </form>
        </div>
    )
}

export default Signup;