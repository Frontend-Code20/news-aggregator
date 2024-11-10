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

export function addError(parent, message) {

    const Error = () => {
        const ptag = document.createElement('p');
        ptag.id = 'error-message';
        ptag.setAttribute('style', 'color: #ff0000;margin:5px 0 0 0; font-size:14px;');
        ptag.innerHTML = message;
        parent.appendChild(ptag);
    }
    const hasChild = document.getElementById('error-message');
    if (!hasChild) {
        Error();
    } else {
        if (parent.contains(hasChild)) {
            parent.removeChild(hasChild);
            Error();
        }
    }

}

export function emailFormat(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
}

export function moveToNext(inputs, idx) {
    console.log(inputs[idx].value.length);
    if (idx < inputs.length - 1) {
        if(inputs[idx].value.length - 1 === 0){
            inputs[idx + 1].focus();
        }else{
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

export function highlightMainMenuItem(index){
    const items = document.querySelectorAll('.main-menu-item');
    Object.values(items).forEach((item, idx) => {
        if(idx === index){
            item.style.color = '#fff'
        }else{
            item.style.color = '#c7c6c6'
        }
    })
}