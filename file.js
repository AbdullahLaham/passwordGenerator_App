    const pw = document.getElementById('pw');
    const copyEl = document.getElementById('copy');
     const len = document.getElementById('len');
     const lower = document.getElementById('lower');
     const upper = document.getElementById('upper');
     const number  = document.getElementById('number');
    const symbol  = document.getElementById('symbol');
    const generateEl  = document.getElementById('generate');


    const upperLetters = 'ABCDEFGHIGKLMOPQRSTUVWXYZ';
    const lowerletters = upperLetters.toLowerCase();
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+}{|":';

    function getLowerCase() {
        return lowerletters[Math.floor(Math.random()*lowerletters.length)];
    }
    function getUpperCase() {
        return upperLetters[Math.floor(Math.random()*upperLetters.length)];
    }
    function getNumbers() {
        return numbers[Math.floor(Math.random()*numbers.length)];
    }
    function getSymbols() {
        return symbols[Math.floor(Math.random()*symbols.length)];
    }

    function generatePassword() {
        const length = len.value;
        let password = '';
        if (upper.checked) {
            password += getUpperCase();
         }
         if (lower.checked) {
            password += getLowerCase();
         }
         if (number.checked) {
            password += getNumbers();
 
         }
         if (symbol.checked) {
            password += getSymbols();
         }
         
        for (var i =password.length; i < length; i++) {
            const x = generateX();
            password += x;
        }
        return password;
    }
    function generateX() {
        const xs = [];

        if (upper.checked) {
           xs.push( getUpperCase());
        }
        if (lower.checked) {
            xs.push(getLowerCase());
        }
        if (number.checked) {
            xs.push(getNumbers());

        }
        if (symbol.checked) {
            xs.push(getSymbols());
        }
        if (xs.length == 0) {
            return "-";
        }
        return xs[Math.floor(Math.random()*xs.length)];
    }
    generateEl.addEventListener('click', () => {
        const pas = generatePassword();
        pw.innerText = pas;
    });
    copyEl.addEventListener('click', () => {
        const textarea = document.createElement("textarea");
        const password = pw.innerText;
        if (!password) {
            return;
        }
        textarea.value = password;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
        alert("password copied to clipboard");
    })