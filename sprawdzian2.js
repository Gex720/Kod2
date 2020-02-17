var tablica = new Array(987, 11, 23, 4, 26, 1, 2, 58, 99, 12);

//dodawanie
Array.prototype.Sum = function() {
    var wynik = 0;
    for(let i = 0; i < this.length; i++) {
        z = this[i];
        wynik = wynik + z;
    }
    return wynik;
}

//odejmowanie
var tablica = new Array(987, 11, 23, 4, 26, 1, 2, 58, 99, 12);

Array.prototype.Sub = function() {
    var wynik = this[0];
    for(let i = 1; i < this.length; i++) {
        z = this[i];
        wynik = wynik - z;
    }
    return wynik;
}

//mnożenie
var tablica = new Array(987, 11, 23, 4, 26, 1, 2, 58, 99, 12);

Array.prototype.Mul = function() {
    var wynik = this[0];
    for(let i = 1; i < this.length; i++) {
        z = this[i];
        wynik = wynik * z;
    }
    return wynik;
}

//dzielenie
var tablica = new Array(987, 11, 23, 4, 26, 1, 2, 58, 99, 12);

Array.prototype.Div = function() {
    var wynik = this[0];
    for(let i = 1; i < this.length; i++) {
        z = this[i];
        wynik = wynik / z;
    }
    return wynik;
}

//klasa

class circle {
    constructor(promien) {
        this.promien = promien
    }
    Perimeter() {
        return 2 * Math.PI * this.promien;
    }

    Field() {
        return Math.PI * (this.promien * this.promien);
    }
}

var kolo = new circle(4);

/*sprawdzenie
kolo.Perimeter();
kolo.Field();
*/
