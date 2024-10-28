const form = document.querySelector('#myForm');
const inputField = document.querySelector('#inputField');
const errorMessage = document.querySelector('#errorMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (validateInput(inputField.value)) {
        errorMessage.textContent = '';
        alert('Input is valid! Form submitted.');
    } else {
        errorMessage.textContent = 'Please enter a valid alphanumeric value.';
    }
});

function validateInput(input) {
    const alphanumericPattern = /^[a-zA-Z0-9]+$/;
    return alphanumericPattern.test(input);
}
