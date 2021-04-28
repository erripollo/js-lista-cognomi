//1. chiedi all’utente il cognome
var userLastname = prompt('Inserisci il tuo cognome').toLowerCase(); 
userLastname = userLastname.charAt(0).toUpperCase() + userLastname.slice(1);

//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var list = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli']
list.push(userLastname);

list = list.sort();

//3. stampa la lista ordinata alfabeticamente
//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
var position;

for (var i = 0; i < list.length; i++) {
    position = i + 1;
    console.log(position + ' ' + list[i]);
}

position = list.indexOf(userLastname) + 1;
console.log('Sei il numero ' + position + ' della lista in ordine alfabetico!');

