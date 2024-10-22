// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
    let characters = '';
        if (options.includeUppercase) characters += uppercase;
        if (options.includeLowercase) characters += lowercase;
        if (options.includeNumbers) characters += numbers;
        if (options.includeSpecialChars) characters += specialChars;

    // TODO: Generate the password based on the selected criteria
    let password = '';
        for (let i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }    
    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
document.getElementById("generateBtn").addEventListener("click", () => {
    const length = parseInt(document.getElementById("length").value);
    const options = {
        includeUppercase: document.getElementById("uppercase").checked,
        includeLowercase: document.getElementById("lowercase").checked,
        includeNumbers: document.getElementById("numbers").checked,
        includeSpecialChars: document.getElementById("specialChars").checked
    };
    const password = generatePassword(length, options);
    document.getElementById("passwordOutput").innerText = password;
});

// BONUS: Implement the copy to clipboard functionality
document.getElementById('copyBtn').addEventListener('click', () => {
    const passwordOutput = document.getElementById('passwordOutput').textContent;
    if (passwordOutput) {
        navigator.clipboard.writeText(passwordOutput).then(() => {
            alert('Password copied to clipboard!');
        });
    };
});