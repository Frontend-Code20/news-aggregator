import { emailFormat , addError } from "./utils";

export function checkLogin(event){

    event.preventDefault();

    const usernameBox = document.getElementById('username-box')
    const passwordBox = document.getElementById('password-box')

    const username = document.getElementById('username')
    const password = document.getElementById('password')
    
    const pass = password.value;
    const email = username.value;

    if(email.length === 0){
        addError(usernameBox, 'Enter your email');
    }
    if(pass.length === 0){
        addError(passwordBox, 'Enter your password')
    }

    if(pass.length > 0 || email.length > 0){
        if(emailFormat(email)){
            window.sessionStorage.setItem('token', 'usama');
            window.location = '/tags'
        }else{
            addError(usernameBox, 'Invalid email format');
        }
    }
          
    

}

export function logout(){
    console.log("OK");
    
    if(window.sessionStorage.getItem('token')){
        window.sessionStorage.clear();
        window.location = '/login'
    }
}