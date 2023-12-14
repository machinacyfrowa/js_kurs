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
            document.getElementById("result").style.display = 
                "block";
        }
}
function addEvent() {
    document.getElementById("calc")
        .addEventListener("click", calc);
}
window.addEventListener("load", addEvent)
