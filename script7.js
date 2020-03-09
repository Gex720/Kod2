var canvas = document.querySelector('#canvas');
var content = canvas.getContext('2d');
//canvas.addEventListener('click', canvasClick, false); //event po kliknięciu myszą
//canvas.addEventListener('mousedown', canvasDblClick, true); //event po podwójnym kliknięciu
//canvas.addEventListener('mousemove', canvasMove, true); //event po ruszeniu myszką
canvas.addEventListener('mousedown', canvasMouseDown, true);
canvas.addEventListener('mouseup', canvasMouseUp, true); //3 aktywne linijki to grupa
canvas.addEventListener('mousemove', canvasMouseMove, true);


function canvasMouseDown(e) {
    this.x = e.pageX; //położenie elementu względem całej strony
    this.y = e.pageY;
   this.down = true;
}

function canvasMouseUp() {
    this.down = false;
}

function canvasMouseMove(e) {
    if(this.down) {
        with(content) { //with to struktura sterująca. Jest wykonywana gdy jest przypisana do konkretnego elementu
            beginPath();
            moveTo(this.x - 9, this.y - 9);
            lineTo(e.pageX - 9, e.pageY - 9);
            content.lineWidth = 1;
            stroke();
        }
        this.x = e.pageX;
        this.y = e.pageY;
    }
}



/* to jest do wyłączonych eventów
function canvasClick() {
    console.log('Krówka MU-MU nie powróci!'); //po kliknięciu wypisuje w konsoli
}

function canvasDblClick(e) { //pobiera współrzędne i rysuje tam kropkę
    var x = e.x; //e to event (pobiera go z eventu)
    var y = e.y;

    content.fillRect(x - 9, y - 9, 2, 2); //rysuje kwadrat 2x2 px przesunięty o 9px w prawo i w dół
}

function canvasMove(e) {
    if(!e) e = window.event;
    var x = e.x;
    var y = e.y;

    content.fillRect(x - 9, y - 9, 2, 2); //rysuje kwadrat 2x2 px przesunięty o 9px w lewo i w dół (żeby pokrywał się z kursorem)
}
*/


