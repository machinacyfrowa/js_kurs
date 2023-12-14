for(let i=0; i<=10; i++) {
    //zaczynamy z licznikiem i równym 0
    //będziemy kontynuować pętlę dopóki licznik jest < 10
    //po każdym przebiegu pętli zwiększymy licznik o 1
    document.write("Licznik wynosi: " + i + "<br>");
}

document.write("<br>");

//do...while zawsze wykona się chociaż raz, 
//dopiero potem sprawdza warunek
do {
    //losujemy liczbę całkowitą <1;6>
    var dice = Math.ceil(Math.random() * 6);
    //wypisujemy wylosowaną liczbę
    document.write("Rzut kostką: " + dice + "<br>");
    //powtarzamy dopóki nie wyrzucimy "6"
} while(dice != 6)

document.write("<br>");

