function validate() {
    let password = document.getElementById("passwordInput").value;
    if(password.length >= 8) {
        //hasło spełnia wymóg długości
        let li = document.getElementById("passwordLength");
        li.innerHTML = "Hasło posiada co najmniej 8 znaków";
        li.style.color = "green";
    } else {
        //hasło nie spełnia wymogu długości
        let li = document.getElementById("passwordLength");
        li.innerHTML = "Hasło nie posiada co najmniej 8 znaków";
        li.style.color = "red";
    }
}

//funkcja anonimowa (funkcja strzałkowa) służy do wstawiania 
//kodu w miejscu, które normalnie wymaga podania nazwy
//funkcji (metody)
//klasyczna metoda z funkcją addEvent patrz wcześniejsze projekty
window.addEventListener("load", () => {
    document.getElementById("passwordInput")
                .addEventListener("input", validate);
})