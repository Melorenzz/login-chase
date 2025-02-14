let userName = document.querySelector('#userName');
let userPassword = document.querySelector('#userPassword');
let loginBtn = document.querySelector('#loginBtn');

loginBtn.addEventListener('mousemove', (e) => {
    if (userName.value === '' || userPassword.value === '') {
        loginBtn.style.left = Math.random() * 320 + "px";
        loginBtn.style.bottom = Math.random() * 10 + "px";

        loginBtn.disabled = true;
    }


})
userName.addEventListener('input', (e) => {
    loginBtn.style.left = '50%';
    loginBtn.style.bottom = '0';
    loginBtn.disabled = false;

})
userPassword.addEventListener('input', (e) => {
    loginBtn.style.left = '50%';
    loginBtn.style.bottom = '0';

    loginBtn.disabled = false;

})