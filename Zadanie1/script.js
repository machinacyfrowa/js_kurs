function calc() {
    //pobieramy wartości z pól edycyjnych
    let a = document.getElementById('a').value;
    a = parseFloat(a);
    let b = document.getElementById('b').value;
    b = parseFloat(b);

    //sprawdzamy jaką operację mamy wykonać
    let operand = '';
    if (document.getElementById('o1').checked)
        operand = '+';
    if (document.getElementById('o2').checked)
        operand = '-';
    if (document.getElementById('o3').checked)
        operand = '*';
    if (document.getElementById('o4').checked)
        operand = '/';

    //pusta zmienna na wynik:
    let result = '';

    //instrukcja switch jest idealna w sytuacji kiedy
    //jedna ze zmiennych przyjmuje jedną z kilku
    //dopuszczalnych wartości
    
    switch(operand) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        default:
            window.alert("Nieprawidłowy operator!");
            break;
        }
        if(result != '') {
            document.getElementById("result").innerHTML =
                "Wynik działania: " + result;
            //jeżeli liczba jest pierwsza 
            if(prime(result)) {
                document.getElementById("result").innerHTML += " i jest liczbą pierwszą";
            }
            document.getElementById("result").style.display = 
                "block";
        }
}
//deklarujemy funkcję o nazwie prime, która przyjmuje jako argument liczbe
//i sprawdza czy ta liczba jest liczbą pierwszą
function prime(number) {
    //zakładamy, że liczba jest pierwsza
    let isPrime = true;
    //sprawdzamy kolejne liczby od 2 do number-1 czy dzieli się bez reszty
    for(let i=2; i<number; i++) {
        if(number % i == 0) {
            //dało się podzielić bez reszty - liczba nie jest pierwsza
            isPrime = false;
        }
    }
    //zwróć czy jest pierwsza czy nie
    return isPrime;
}
function addEvent() {
    document.getElementById("calc")
        .addEventListener("click", calc);
}
window.addEventListener("load", addEvent)
