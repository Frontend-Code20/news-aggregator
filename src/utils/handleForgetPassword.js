import { addError } from "./utils";
import { emailFormat } from "./utils";

export function SendOTPEmail(event){
    event.preventDefault();
    let sent = false;
    const email = document.getElementById('frg-email-input');
    const emailBox = document.getElementById('frg-email-box');
    
    if(email.value.trim() === ''){
        addError(emailBox, 'Enter you email');
    }else{
        if(emailFormat(email.value)){
            sent = true;
        }else{
            addError(emailBox, 'Invalid Email format');
        }
    }
    return sent
}