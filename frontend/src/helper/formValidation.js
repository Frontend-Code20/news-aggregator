
/**
 * This function is only validate empty input field. if any field is empty it will return false
 * 
 * @returns {boolean}
 */
export function validateForm() {

    const form = document.querySelector('.validator');
    let isValid = true;

    if (!form) {
        console.error("Form is not found error. add 'validator' class to form");
        return false;
    }

    const formGroup = form.querySelectorAll('.form-group');
    formGroup.forEach((group) => {
        const control = group.querySelector('.form-input')
        const errorBox = group.querySelector('.invalid-feedback');

        if (control.tagName === 'INPUT' && control.type === 'text') {
            isValid = checkForEmptyField(control, errorBox);
            control.addEventListener('input', (event) => handleInputChange(event, errorBox));
        } else if (control.tagName === 'INPUT' && control.type === 'email') {
            isValid = validateEmail(control, errorBox);
            control.addEventListener('input', () => validateEmail(control, errorBox));
        } else if (control.tagName === 'DIV') {
            const passwordInput = control.querySelector('input');
            isValid = validatePasswordDiv(control, passwordInput, errorBox);
            passwordInput.addEventListener('input', () => validatePasswordDiv(control, passwordInput, errorBox));
        }
    })

    return isValid;
}

function handleInputChange(event, errorBox) {
    const input = event.target;
    const hasValue = input.value === '';
    toggleError(input, errorBox, hasValue, "This field can't be empty.");
}

function checkForEmptyField(input, errorBox) {
    const isEmpty = input.value === '';
    toggleError(input, errorBox, isEmpty, "Please fill the field.");
    return isEmpty;
}

function toggleError(input, errorBox, hasError, message) {
    if (hasError) {
        input.style.border = '1px solid #ff0000';
        errorBox.innerHTML = message;
        errorBox.style.display = 'block'
    } else {
        errorBox.style.display = 'none'
        input.style.border = '1px solid #0891b2';
    }
}

function validatePasswordDiv(div, passwordInput, errorBox, minLength = 8) {

    const isEmpty = passwordInput.value === '';
    const isShort = passwordInput.value.length < minLength;

    if (isEmpty) {
        toggleError(div, errorBox, isEmpty, "Please enter password.");
        return false;
    }

    if (isShort) {
        toggleError(div, errorBox, isShort, `Password must be at least ${minLength} characters`);
        return false;
    }

    toggleError(div, errorBox, false);
    return true;
}
function validateEmail(input, errorBox) {

    const isEmpty = input.value === '';
    const isInvlid = !emailFormat(input.value);

    if (isEmpty) {
        toggleError(input, errorBox, isEmpty, "This field can't be empty.");
        return false;
    }

    if (isInvlid) {
        toggleError(input, errorBox, isInvlid, "Invalid email address.")
        return false;
    }

    toggleError(input, errorBox, false);
    return true;
}

function emailFormat(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
}

export function comparePassword() {
    const password = document.getElementById('password');
    const confirmInput = document.getElementById('confirmPassword');
    confirmInput?.addEventListener('input', comparePassword)

    if (confirmInput && password) {
        const parentDiv = confirmInput.parentNode;
        const errorBox = parentDiv.parentNode.querySelector('.invalid-feedback');

        const isEmpty = confirmInput.value === '';
        const isMismatch = confirmInput.value !== password.value;

        if (isEmpty) {
            toggleError(parentDiv, errorBox, isEmpty, "Please confirm your password");
            return false;
        }

        if (isMismatch) {
            toggleError(parentDiv, errorBox, isMismatch, "Passwords do not match.")
            return false;
        }

        toggleError(parentDiv, errorBox, false);
        return true;
    }
    console.error("Confirm password or password input is not found. Please add 'confirmPassword' id to confirm input");
    return false;
}

export function validateOTP(inputs) {
    if (!inputs) {
        return false;
    }

    let isValid = true;
    inputs.forEach(input => {
        if (input.value === '') {
            input.style.border = '1px solid #ff0000';
            isValid = false;
        }else{
            input.style.border = "1px solid #0891b2";
        }
    });

    return isValid;
}