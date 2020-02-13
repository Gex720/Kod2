/* 
enkapsulacja
polimorfizm 
dziedziczenie - przehodzi z klasy nadrzędnej do podrzędnej (chyba że jest private)
*/

//tworzenie obiektu
var arr = new Array(10, 20, 30, 40, 50); //()to konstruktor (jako parametry wpisujemy wartości), nawias to tablica(tablica jako obiekt)

//wyświetlanie wartości
document.write(arr[2]); //wyświetli wartość 30 (bo index to 2)
document.write(arr.length); //wyślietla długość tabicy

for(let i = 0; i < arr.length; i++) {
    document.write(arr[i]); //wypisuje wszystkie elementy talicy
}

//dodawanie to tablicy
arr.push(50); //dodaje wartość 50 do tablicy

//tworzenie prototypu
Array.prototype.showAll = function() {
    for(let i = 0; i < arr.length; i++) {
        document.write(arr[i]); //wypisuje wszystkie elementy tablicy tylko jest krócej (prototyp to dołączenie metody do utworzonej klasy) 
    }
}

//wyświetlanie zawartości przy pomocy prototypu
arr.showAll(); //wyświetla całą zawartość tablicy

var arr2 = new(a, b, c, d, f)
arr2.showAll() //wyświetli całą zawartość drugiej tablicy (ta sama metoda showAll co przy arr(nie trzeba dwa razy pisać tej samej metody))