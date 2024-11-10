import { useState } from "react";

function ChangePassword(props) {

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
        <div className="reset-password-box">
            <div className="input-box password-input-box">
                <input type="password" placeholder="New Password" className="password-input" />
                <img alt="show" src="/icons/hide.png" className="show-password"  onClick={(event) => showPassword(event)} />
            </div>
            <div className="input-box password-input-box">
                <input type="password" placeholder="Confirm Password" className="password-input" />
                <img alt="show" src="/icons/hide.png" className="show-password" onClick={(event) => showPassword(event)} />
            </div>
            <input type="submit" value={'Submit'} className="reset-btn large-btn" onClick={() => props.setCurrentForm('login')} />
        </div>
    )
}

export default ChangePassword;