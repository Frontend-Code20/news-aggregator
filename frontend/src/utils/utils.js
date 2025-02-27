export function setNumberFormat(num) {

    let result = 0;
    if (num > 1000 && num < 100000) {
        result = (num / 1000).toFixed(2) + "K";
    } else if (num > 100000) {
        result = (num / 100000).toFixed(1) + "M"
    } else {
        result = num
    }
    return result;
}

export function moveToNext(inputs, idx) {
    console.log(inputs[idx].value.length);
    if (idx < inputs.length - 1) {
        if (inputs[idx].value.length - 1 === 0) {
            inputs[idx + 1].focus();
        } else {
            return;
        }
    }
}

export function moveToPrevious(inputs, idx, event) {
    if (event.keyCode === 8) {
        if (idx > 0 && idx < inputs.length) {
            if (inputs[idx].value.length === 0) {
                inputs[idx - 1].focus();
            }
        }
    }

    if (event.keyCode === 37) {
        if (inputs[idx].value.trim() === '') {
            if (idx > 0) {
                inputs[idx - 1].focus();
            }
        }
    }

    if (event.keyCode === 39) {
        if (inputs[idx].value.trim() === '') {
            if (idx < inputs.length - 1) {
                inputs[idx + 1].focus();
            }
        }
    }
}

let minutes = 1;
let seconds = 60;

export function setTimeInterval(timebox, resendBtn){
    const timerFinished = minutes === 0 && seconds === 0; 
    if(!timebox) return false;

    timebox.innerHTML = `${minutes > 9 ? '':'0'}${Math.floor(minutes)} : ${seconds > 9 ? '' : '0'}${seconds}`

    if(seconds > 0){
        seconds--;
        setTimeout(() => {
            setTimeInterval(timebox, resendBtn);
        }, 1000);
    }else{
        if(timerFinished){
            resendBtn.disabled = false;
        }else{
            seconds = 60;
            minutes--;
        }
    }
}

export function getOTPValue(inputs){
    if(!inputs) return false;
    let OTP = ''
    inputs.forEach(input => {
        OTP += input.value;
    });

    return OTP.length < inputs.length ? false : OTP; 
}

export function resetTimer(min){
    if(!min) return false;
    minutes = min - 1;
    seconds = 60; 
}

/**
 * This function will return token from session or local storage
 * 
 * @returns 
 */
export function getToken() {
    return window.localStorage.getItem('token') || window.sessionStorage.getItem('token');
}

/**
 * This function will slice from start to the given end
 * and return sliced text
 * @param {string} text 
 * @param {number} end 
 * @returns 
 */
export function slicedText(text, end) {
    return text?.length > end ? text?.slice(0, end) + '...' : text
}