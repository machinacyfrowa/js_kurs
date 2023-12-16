function validate() {
    let password = document.getElementById("passwordInput").value;
    if(password.length >= 8) {
        //hasło spełnia wymóg długości
        let li = document.getElementById("passwordLength");
        li.innerHTML = "Hasło posiada co najmniej 8 znaków";
    } else {
        //hasło nie spełnia wymogu długości
        let li = document.getElementById("passwordLength");
        li.innerHTML = "Hasło nie posiada co najmniej 8 znaków";
    }
}