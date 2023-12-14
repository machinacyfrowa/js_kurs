function greet() {
    //Tworzę zmienną o nazwie firstName
    let firstName = "";
    //przeczytaj imię z pola edycyjnego i zapisz je do zmiennej
    firstName = document.getElementById("firstNameInput").value;
    //przygotowujemy tekst powitania
    let greeting = "Witaj " + firstName + "!";
    //wyświetlamy tekst powiadomienia
    window.alert(greeting);
    //czyszcze zawartość pola edycyjnego
    document.getElementById("firstNameInput").value = "";
}
function addEvents() {
    //dodajemy do guzika zdarzenie uruchamiane po kliknięciu
    document.getElementById("sendButton")
        //po kliknięciu uruchom funkcje greet
        .addEventListener("click", greet);
}
//dodajemy zdarzenie, które uruchomi się automatycznie
//dopiero po załadowaniu całej strony (html+css)
window.addEventListener("load", addEvents);