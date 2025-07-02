document.addEventListener('DOMContentLoaded', () => {
  const form        = document.getElementById('form');
  const formMsg     = document.getElementById('formMsg');
  const passToggles = document.querySelectorAll('.passToggle')

  const emailPattern    = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern    = /^\d{10}$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

  // Toggle show/hide for each password
  passToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const input = toggle.previousElementSibling;
      const isPwd = input.type === 'password';
      input.type = isPwd ? 'text' : 'password';
      toggle.classList.toggle('fa-eye');
      toggle.classList.toggle('fa-eye-slash');
      toggle.title =isPwd ? 'Hide Password' : 'Show Password';
    });
  });

  // On Form Submit
  form.addEventListener('submit', e => {
    e.preventDefault();
    clearMessages();

    const email           = form.email.value.trim();
    const phone           = form.phoneNumber.value.trim();
    const password        = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    let isValid = true;

    if (!emailPattern.test(email)) {
      showMessage('email', 'Enter a valid email address.');
      isValid = false;
    }
    if (!phonePattern.test(phone)) {
      showMessage('phone', 'Phone number must be exactly 10 digits.');
      isValid = false;
    }
    if (!passwordPattern.test(password)) {
      showMessage('password', 'Password must be at least 6 chars, include uppercase, lowercase, and a number.');
      isValid = false;
    }
    if (password !== confirmPassword) {
      showMessage('confirmPassword', 'Passwords do not match.');
      isValid = false;
    }

    if (isValid) {
      formMsg.textContent = 'Form submitted successfully!';
      formMsg.style.color = 'green';
      form.reset();
      passToggles.forEach(toggle => {
        toggle.classList.remove('fa-eye-slash');
        toggle.classList.add('fa-eye');
        toggle.title = 'Show Password';
      });
    } else {
      formMsg.textContent = 'Please fix the errors above.';
      formMsg.style.color = 'red';
    }
  });

  // Show error in the corresponding .messages div
  function showMessage(fieldName, msg) {
    const inputControl = document.getElementById(fieldName).closest('.inputControl');
    const msgDiv       = inputControl.querySelector('.messages');
    msgDiv.textContent = msg;
    msgDiv.style.color = 'red';
  }

  // Clear all messages
  function clearMessages() {
    document.querySelectorAll('.messages').forEach(div => div.textContent = '');
    formMsg.textContent = '';
  }
});