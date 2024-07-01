document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let valid = true; // Flag to track form validity

    // Email validation
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = 'Invalid email address';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Password validation
    const passwordError = document.getElementById('passwordError');
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!passwordPattern.test(password)) {
        passwordError.textContent = 'Invalid password. Must contain uppercase, lowercase, numbers, and special character.';
        valid = false;
    } else {
        passwordError.textContent = '';
    }

    // If form is valid, alert success message
    if (valid) {
        alert('Form submitted successfully!');
        // Here you can add code to submit the form data to the server
    }
});
