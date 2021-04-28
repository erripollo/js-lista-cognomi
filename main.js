//1. chiedi all’utente il cognome
var userLastname = prompt('Inserisci il tuo cognome').toLowerCase(); 
userLastname = userLastname.charAt(0).toUpperCase() + userLastname.slice(1);

//console.log(userLastname);

//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var list = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli']
list.push(userLastname);

list = list.sort();

//console.log(list);

//3. stampa la lista ordinata alfabeticamente
//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
}


for (var i = 0; i < list.length; i++) {
    var position = i + 1;
    if (userLastname == list[i]) {
         console.log('Sei il numero ' + position + ' della lista in ordine alfabetico!');
    }
}

