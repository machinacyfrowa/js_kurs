function check() {
    //pobieramy liczbę z pola edycyjnego i zapisujemy
    //do zmiennej number
    let number = document.getElementById("numberInput").value;
    //sprawdz czy to co dostalismy ze strony jest w ogóle liczbą
    if (parseInt(number) != NaN) {
        //dostaliśmy liczbę - sprawdzamy parzystość
        //sprawdzamy czy liczba jest parzysta
        if (number % 2 == 0) {
            //liczba jest parzysta
            document.getElementById("result").innerHTML
                = "Liczba jest parzysta";
        } else {
            //liczba jest nieparzysta
            document.getElementById("result").innerHTML
                = "Liczba jest nieparzysta";
        }
    } else {
        //dostaliśmy cos co nie jest liczbą - wyświetl błąd
        window.alert("Podana wartość nie jest liczbą!");
    }

}
function addEvent() {
    document.getElementById("checkButton")
        .addEventListener("click", check);
}
window.addEventListener("load", addEvent);