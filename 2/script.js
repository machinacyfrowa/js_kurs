function check() {
    //pobieramy liczbę z pola edycyjnego i zapisujemy
    //do zmiennej number
    let number = document.getElementById("numberInput").value;
    //sprawdzamy czy liczba jest parzysta
    if(number % 2 == 0) {
        //liczba jest parzysta
        document.getElementById("result").innerHTML 
                                = "Liczba jest parzysta";
    } else {
        //liczba jest nieparzysta
        document.getElementById("result").innerHTML
                                = "Liczba jest nieparzysta";
    }
}
function addEvent() {
    document.getElementById("checkButton")
                .addEventListener("click", check);
}
window.addEventListener("load", addEvent);