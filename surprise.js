document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const passwordInput = document.getElementById('password');
    const validationError = document.getElementById('validationError');
    const hintModal = document.getElementById('hintModal');
    const closeModal = document.querySelector('.close');

    // Normalize the password input for comparison
    const normalizedPassword = normalizePassword(passwordInput.value.trim());

    // List of acceptable password formats
    const correctPasswords = [
        '10062025',               // "10062025"
        '10/06/2025',             // "10/06/2025"
        'october6,2025'           // "October 6, 2025"
    ];

    // Check if the normalized input matches any of the correct formats
    if (!correctPasswords.includes(normalizedPassword)) {
        // Show error message
        validationError.style.display = 'block'; 
        // Show modal with hint
        hintModal.style.display = 'block'; 
        
        // Clear the password input field AFTER showing the error/modal
        passwordInput.value = '';  // This will reset the password input

    } else {
        // Password is correct, redirect to taptap.html
        window.location.href = 'taptap.html';
    }

    // Close modal when clicking the "X"
    closeModal.addEventListener('click', function() {
        hintModal.style.display = 'none';
    });

    // Close modal if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target === hintModal) {
            hintModal.style.display = 'none';
        }
    });
});

// Function to normalize the password input
function normalizePassword(input) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const dateRegex = /[^0-9a-zA-Z]/g;
    return input.replace(dateRegex, '').toLowerCase();
}
