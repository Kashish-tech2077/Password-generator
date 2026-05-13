console.log("Welcome to Password Generator");

// DOM Elements

// General elments
const slider = document.getElementById('slider');
const passwordText = document.getElementById('passwordText');
const generatePasswordBtn = document.getElementById('generatePasswordBtn');
const subtractBtn = document.getElementById('subtractBtn');
const addBtn = document.getElementById('addBtn');
const passwordCheckbox = document.querySelectorAll('.passwordCheckbox');
const passwordLengthText = document.getElementById('passwordLengthText');
const passwordStrengthSec = document.querySelector('.passwordStrengthSec');
const copyBtn = document.getElementById('copyBtn');
const moreText = document.getElementById('moreText');
const popUp = document.getElementById('popUp');
const crossBtn = document.getElementById('crossBtn');

// checkboxes
const upperCaseCheckbox = document.getElementById('upperCaseCheckbox');
const lowerCaseCheckbox = document.getElementById('lowerCaseCheckbox');
const numberCaseCheckbox = document.getElementById('numberCaseCheckbox');
const symbolCaseCheckbox = document.getElementById('symbolCaseCheckbox');

// houseImages
const houseImage1 = document.getElementById('houseImage1');
const houseImage2 = document.getElementById('houseImage2');
const houseImage3 = document.getElementById('houseImage3');
const houseImage4 = document.getElementById('houseImage4');
const houseImage5 = document.getElementById('houseImage5');


// ---------------------All characters---------------------

const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const upper = lowerCase.toString().toUpperCase().replaceAll(",", "");
const upperCase = [...upper];

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', ';', ':', ',', '.', '"', "'", '~'];

// ---------------------All functions---------------------

// Generate password function
function generatePassword() {

    let passwordPool = [];

    if (upperCaseCheckbox.checked === true) {
        passwordPool = [...upperCase];
    }

    if (lowerCaseCheckbox.checked === true) {
        passwordPool = [...passwordPool, ...lowerCase];
    }

    if (numberCaseCheckbox.checked === true) {
        passwordPool = [...passwordPool, ...numbers];
    }

    if (symbolCaseCheckbox.checked === true) {
        passwordPool = [...passwordPool, ...symbols];
    }

    if (passwordPool.length === 0) {
        copyBtn.disabled = true;
        copyBtn.style.backgroundColor = "gray";
        copyBtn.style.cursor = 'not-allowed';
        return passwordText.textContent = "Please select any input!";
    }
    else {
        copyBtn.disabled = false;
        copyBtn.style.backgroundColor = "rgb(96, 96, 215)";
        copyBtn.style.cursor = 'pointer';
    }

    let randomPassword;
    let password = "";

    for (let i = 1; i <= slider.value; i++) {
        // using Math.random() is NOT secure
        // randomPassword = fullCharacters[Math.floor(Math.random()* (fullCharacters.length))];

        // using Cryptographically Secure Random Number Generation (CSPRNG)
        randomPassword = passwordPool[window.crypto.getRandomValues(new Uint32Array(1))[0] % passwordPool.length];
        password += randomPassword;
    }

    return password;

}

// Slider button function
function sliderButton() {

    passwordLengthText.innerHTML = `Password length is: <strong>${slider.value}</strong>`;

    // subtract button
    if (slider.value == 1) {
        subtractBtn.disabled = true;
        subtractBtn.style.cursor = 'not-allowed';
    }
    else {
        subtractBtn.disabled = false;
        subtractBtn.style.cursor = 'pointer';
    }

    // add button
    if (slider.value == 50) {
        addBtn.disabled = true;
        addBtn.style.cursor = 'not-allowed';
    }
    else {
        addBtn.disabled = false;
        addBtn.style.cursor = 'pointer';
    }

}

// Password Strength function
function passwordStrength() {

    let sliderValue = parseInt(slider.value, 10);
    let count = 0;

    if (upperCaseCheckbox.checked) count++;
    if (lowerCaseCheckbox.checked) count++;
    if (numberCaseCheckbox.checked) count++;
    if (symbolCaseCheckbox.checked) count++;

    if (count === 0) {
        return passwordStrengthSec.textContent = "Please select any input!";
    }

    // reset everytime the function runs
    passwordStrengthSec.classList.remove('veryWeakPassword', 'weakPassword', 'goodPassword', 'strongPassword', 'veryStrongPassword');
    [houseImage1, houseImage2, houseImage3, houseImage4, houseImage5].forEach(element => element.style.display = 'none');

    if (sliderValue <= 3) {
        passwordStrengthSec.textContent = "Very weak password";
        passwordStrengthSec.classList.add('veryWeakPassword');
        houseImage1.style.display = 'block';
    }
    else if ((sliderValue >= 3 && sliderValue <= 6) || (sliderValue >= 7 && sliderValue <= 10 && count <= 1)) {
        passwordStrengthSec.textContent = "Weak password";
        passwordStrengthSec.classList.add('weakPassword');
        houseImage2.style.display = 'block';
    }

    else if ((sliderValue >= 7 && sliderValue <= 10 && count > 1) || (sliderValue >= 10 && sliderValue <= 15 && count <= 1)) {
        passwordStrengthSec.textContent = "Good password";
        passwordStrengthSec.classList.add('goodPassword');
        houseImage3.style.display = 'block';
    }

    else if ((sliderValue >= 10 && sliderValue <= 15 && count > 1) || (sliderValue >= 15 && sliderValue <= 18 && count <= 1)) {
        passwordStrengthSec.textContent = "Strong password";
        passwordStrengthSec.classList.add('strongPassword');
        houseImage4.style.display = 'block';
    }
    else {
        passwordStrengthSec.textContent = "Very Strong password";
        passwordStrengthSec.classList.add('veryStrongPassword');
        houseImage5.style.display = 'block';
    }

}

// Copy text function
function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            openPopUp();
        })
        .catch((error) => console.log(`error: ${error.message}`));
}

// Open Pop up function
function openPopUp() {
    popUp.style.display = 'flex';
}

// Close Pop up function
function closePopUp() {
    popUp.style.display = 'none';
}


// Initial Values
passwordText.textContent = generatePassword();
passwordLengthText.innerHTML = `Password length is: <strong>${slider.value}</strong>`;
passwordStrengthSec.textContent = "Very Strong password";
passwordStrengthSec.classList.add('veryStrongPassword');
houseImage5.style.display = 'block';


// ---------------------All Event listeners on DOM elements---------------------

generatePasswordBtn.addEventListener('click', () => {
    passwordText.textContent = generatePassword();
});

slider.addEventListener('input', () => {

    passwordText.textContent = generatePassword();
    sliderButton();
    passwordStrength();
});

addBtn.addEventListener('click', () => {
    slider.value++;
    passwordText.textContent = generatePassword();
    sliderButton();
    passwordStrength();
});

subtractBtn.addEventListener('click', () => {
    slider.value--;
    passwordText.textContent = generatePassword();
    sliderButton();
    passwordStrength();
});

copyBtn.addEventListener('click', () => {
    copyText(passwordText.textContent);

    setTimeout(() => {
        closePopUp();
    }, 4000);
});


// ---------------------checkbox event listener---------------------

passwordCheckbox.forEach(element => {

    try {
        element.addEventListener('click', () => {
            passwordText.textContent = generatePassword()
            passwordStrength();
        })

    }

    catch (error) {
        console.log(`error: ${error.message}`);
    }

});


// ---------------------PopUp logic ---------------------

crossBtn.addEventListener('click', () => {
    closePopUp();
});

// Escape button key press -> hide Pop up
document.addEventListener('keydown', (event) => {

    if (event.key === 'Escape') {
        closePopUp();
    }

});

