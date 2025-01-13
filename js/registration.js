document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Password validation
    function validatePassword() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.setCustomValidity("Passwords do not match");
        } else {
            confirmPasswordInput.setCustomValidity("");
        }
    }

    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validatePassword);

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic form validation
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = passwordInput.value;
        const educationLevel = document.getElementById('educationLevel').value;

        // Simple validation (you'd want more robust validation in a real app)
        if (!firstName || !lastName || !email || !password || !educationLevel) {
            alert('Please fill in all fields');
            return;
        }

        // In a real application, you'd send this data to a backend
        const userData = {
            firstName,
            lastName,
            email,
            educationLevel
        };

        // Simulate successful registration
        alert('Registration Successful! Redirecting to login...');
        
        // Redirect to login page
        window.location.href = 'index.html';
    });
});
