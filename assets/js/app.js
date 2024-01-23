let righe = 9;
let colonne = 10;
let numeriEstratti = [];

//funzionamento programma: si parte con una tabella vuota e ad ogni estrazione riempire la caselal della tabella corrispondete al 
//numero casuale uscito col numero stesso

function DisegnaTabella() {

    let div1 = document.getElementById('div1');
    let tabella = document.createElement("table");

    var i = 1;
    for (var r = 0; r < righe; r++, i++) {
        let row = document.createElement("tr");
        for (var c = 0; c < colonne; c++, i++) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode("");
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tabella.appendChild(row);
    }

    div1.appendChild(tabella);

}

DisegnaTabella();

function estrazione(){
    let numero;
    do {
        numero = Math.floor(Math.random() * 90) + 1; //estrazione numero casuale
    } while (numeriEstratti.includes(numero)); //controllo se il numero è già stato estratto
    numeriEstratti.push(numero);
    let casella = document.getElementsByTagName("td")[numero - 1]; //seleziono la casella corrispondente al numero estratto
    casella.innerHTML = numero; //scrivo il numero estratto nella tabella
    if(numeriEstratti.length == 90){alert("Hai estratto tutti i numeri!");}
}
