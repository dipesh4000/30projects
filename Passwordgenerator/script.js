const passwordbox = document.getElementById("password");
const generatebutton = document.getElementById("gen");
const copybutton = document.getElementById("copyimg");
const maxlength = 12;
const allchars  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=[]{}:;,.<>/?`~";
function createPassword(){
    let password = "";
    while(maxlength > password.length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    passwordbox.value = password;
}

generatebutton.addEventListener("click", function(){
    passwordbox.value = "";
    createPassword();
});
copybutton.addEventListener("click", function(){
    const password = passwordbox.value;
    navigator.clipboard.writeText(password);
})