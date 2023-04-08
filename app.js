const $form = document.querySelector('form');
const $firstName = document.querySelector('#first__name');
const $lastName = document.querySelector('#last__name');
const $email = document.querySelector('#email');
const $passWord = document.querySelector('#pass__word');
const $submitBtn = document.querySelector('button');


const isEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

const error = ($input, errorMessage) => {
    $input.parentNode.classList.add('error');
    $input.parentNode.nextElementSibling.innerText = errorMessage;
}

const clearError = ($input) => {
    $input.parentNode.classList.remove('error');
    $input.parentNode.nextElementSibling.innerText = "";
}

const validate = () => {
    const firstNameValue = $firstName.value.trim()
    const lastNameValue = $lastName.value.trim()
    const emailValue = $email.value.trim()
    const passwordValue = $passWord.value.trim()

    clearError($firstName);
    clearError($lastName);
    clearError($email);
    clearError($passWord);

    if (!firstNameValue) {
        error($firstName, "First Name cannot be empty");
    }
    if (!lastNameValue) {
        error($lastName, "Last Name cannot be empty");
    }
    if (!emailValue) {
        error($email, "Email Address cannot be empty");
    } else if (!isEmail(emailValue)) {
        error($email, "Looks like this is not an email")
    }
    if (!passwordValue) {
        error($passWord, "Password cannot be empty");
    }
}

$form.addEventListener('submit', (e) => {
    e.preventDefault();

    validate()
})