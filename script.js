

function checkValidity(anInput, str, regexVal) {
    if (regexVal.test(str)) {
        anInput.className = 'valid';
    } else {
        anInput.className = 'invalid';
    };
    submitAble();
};

function submitAble() {
    if (passwordInput.value.length > 7) {
        passwordInput.className = 'valid';
        if (emailInput.className === 'valid') {
            if (emailInput.className === countryInput.className && countryInput.className === zipcodeInput.className) {
                submitBtn.disabled = false;
            }
        }
    }
}

const emailRegEx = /^[a-z0-9][a-z0-9_.-]+@[a-z0-9]+\.(com|net|org|biz|uk|ca|gov|us|eu|edu)$/i;
const countryRegEx = /(?=.*[a-z])(?!.*\d)[a-z ]+/i;
const zipcodeRegEx = /^\d{4,5}$/;
const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


const emailInput = document.querySelector('#femail');
emailInput.addEventListener('blur', () => {
    checkValidity(emailInput, emailInput.value, emailRegEx);
});
emailInput.addEventListener('keyup', () => {
    if (emailInput.className === 'invalid') {
        checkValidity(emailInput, emailInput.value, emailRegEx);
    };
});

const countryInput = document.querySelector('#fcountry');
countryInput.addEventListener('blur', () => {
    checkValidity(countryInput, countryInput.value, countryRegEx);
});
countryInput.addEventListener('keyup', () => {
    if (countryInput.className === 'invalid') {
        checkValidity(countryInput, countryInput.value, countryRegEx);
    };
});

const zipcodeInput = document.querySelector('#fzip');
zipcodeInput.addEventListener('blur', () => {
    checkValidity(zipcodeInput, zipcodeInput.value, zipcodeRegEx);
});
zipcodeInput.addEventListener('keyup', () => {
    if (zipcodeInput.className === 'invalid') {
        checkValidity(zipcodeInput, zipcodeInput.value, zipcodeRegEx);
    };
});

const passwordInput = document.querySelector('#fpass');
passwordInput.addEventListener('keyup', submitAble);

const submitBtn = document.querySelector('#submit-btn');
submitBtn.disabled = true;
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    checkValidity(passwordInput, passwordInput.value, passwordRegEx);
});
