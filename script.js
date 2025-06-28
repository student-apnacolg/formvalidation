const form = document.getElementById('form');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const pass = document.getElementById('password');
const confirm = document.getElementById('confirmPassword');


form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const validateEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

const setError = (element, mesage) => {
const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = mesage;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

const validateInputs = () => {
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const passValue = pass.value.trim();
  const confirmValue = confirm.value.trim();

  if (emailValue === '') {
    setError(email, 'Email is empty')
  } else if (!validateEmail(emailValue)) {
    setError(email, 'Email is not valid')
  } else {
    setSuccess(email)
  }
  if (phoneValue === '') {
    setError(phone, 'Phone Number is empty')
  } else if (Number.isInteger(Number(phoneValue)) === false){
    setError(phone, 'Phone Number is not valid')
  } else {
    setSuccess(phone)
  }
  if (passValue === '') {
    setError(pass, 'Password is empty.')
  } else if(passValue.length < 8){
    setError(pass, 'Password must be at least 8 characters')
  } else {
    setSuccess(pass);
  }
  if (confirmValue === '') {
    setError(confirm, 'Confirm Password is empty.')
  } else if(confirmValue !== passValue){
    setError(confirm, 'Password does not match')
  } else {
    setSuccess(confirm);
  }
}