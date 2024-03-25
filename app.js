const password_el = document.querySelector('#password');
const length_el = document.querySelector('#Lenght');
const lowercase_el = document.querySelector('#Lowercase');
const uppercase_el = document.querySelector('#Uppercase');
const number_el = document.querySelector('#Number');
const symbols_el = document.querySelector('#Symbols');

const generate_btn = document.querySelector('#generator');
generate_btn.addEventListener('click', Generatepassword);

function Generatepassword() {
    let password = "";
    let length = length_el.value;
    let chars = "";

    chars += uppercase_el.checked ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    chars += lowercase_el.checked ? "abcdefghijklmnopqrstuvwxyz" : "";
    chars += number_el.checked ? "0123456789" : "";
    chars += symbols_el.checked ? "!@#$%^&*()" : "";

    for (let i = 0; i < length; i++) {
        let rand = Math.floor(Math.random() * chars.length);
        password += chars.substring(rand, rand + 1);
    }

    password_el.value = password;
}

// Optional: Add the copy functionality if needed
const copy_btn = document.querySelector('#copy');
copy_btn.addEventListener('click', copypassword);

async function copypassword() {
    if (navigator.clipboard) {
        await navigator.clipboard.writeText(password_el.value);
    }
}
