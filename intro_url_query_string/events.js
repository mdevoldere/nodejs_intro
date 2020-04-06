const events = require('events');

var handler = new events.EventEmitter();

var ecouteur = function ecouteur() {
    console.log('ecouteur');
}

var ecouteur2 = function ecouteur2() {
    console.log('ecouteur2');
}

handler.addListener('/hello', ecouteur);
handler.addListener('/hello/bonjour', ecouteur2);

//handler.addListener('requete', ecouteur2);

console.log(handler);

handler.emit('/hello');

handler.emit('errorsdqkjfsdklfj');

//handler.removeListener('requete', ecouteur2);