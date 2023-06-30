const emailRegEx = /^[a-z0-9][a-z0-9_.-]+@[a-z0-9]+\.(com|net|org|biz|uk|ca|gov|us)/i;
const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;




function dontRefresh(e) {
    e.preventDefault();
    
    
    checkEmail(emailInput.value);
}

function checkEmail() {
    const str = emailInput.value;
    const emailRegEx = /^[a-z0-9][a-z0-9_.-]+@[a-z0-9]+\.(com|net|org|biz|uk|ca|gov|us|eu)/i;
    if (emailRegEx.test(str)) {
        emailInput.className = 'valid';
    } else {
        emailInput.className = 'invalid';
    };
};

const goBtn = document.querySelector('#submit-btn');


const emailInput = document.querySelector('#femail');
emailInput.addEventListener('blur', checkEmail);



//if any input is focused that has the classname invalid, then check for validation on every keypress of that inputw
//function that checks for validity
//function that checks for invalidity
//function that's activated on focus
//function that's activated on blur
//put regexes in array, put input variables in array, add event listener to form element and then do indexOf(e.target);
//then run it through single function that takes the input and the associated regex as arguments, gives the input an associated class name and checks that everything is validated
//also checks when input is focused if the input previously has an invalid class. if so, it checks for validity on that input with every keystroke 
