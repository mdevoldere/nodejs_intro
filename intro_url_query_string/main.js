const http = require('http'); // inclure le module nommé "http"
const url = require('url');
const querystring = require('querystring');
const events = require('events');

console.log("Hello World !"); // Affiche "hello world dans la console"

const result = [];

var hello = function hello() {
    console.log('Event Hello');
    result.push('hello');
}

var hello_bonjour = function () {
    console.log('Event hello_bonjour');
    result.push('hello_bonjour');
}

var hello_requete = function () {
    console.log('Event hello_requete');
}

const handler = new events.EventEmitter();
handler.addListener('_requete', hello_requete);
handler.addListener('/hello', hello);
handler.addListener('/hello/bonjour', hello_bonjour);


// Création d'un serveur HTTP
// la fonction envoyée en paramètre sera exécutée à chaque requête envoyée vers ce serveur
const webServer = http.createServer(function(requete, reponse) {

    var req = url.parse(requete.url);
    console.log(req);

    var path = req.pathname;
    console.log(path);

    var params = querystring.parse(req.query);
    console.log(params);

    result.splice(0, result.length);

    handler.emit('_requete');

    handler.emit(path);

    if(result.length > 0) {
        reponse.writeHead(200, {'Content-Type' : 'application/json; charset=utf-8'}); // écriture des entêtes HTPP (code de réponse 200 = OK)
        let json = JSON.stringify(result); // contenu à renvoyer
        console.log(json);
        reponse.end(json); // on termine la réponse. La paramètre correspond au contenu qui sera affiché chez le client qui a initié la requête.
    }
    else {
        reponse.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        console.log('Erreur 404');
        reponse.end('Erreur 404');
    }
});


// Lancement du serveur
// Le serveur écoute et est en attente de requêtes
// l'entier envoyé en paramètre correspond au port d'écoute (soit 80 soit 443 soit une valeur comprise entre 1025 et 65535)
webServer.listen(8000);


// POUR LANCER LE SERVEUR :
// ouvrez un terminal
// naviguez jusqu'au répertoire de l'application
// lancez la commande: node main.js
// rendez vous ensuite sur http://localhost:8000 via votre navigateur
// essayez les URLS suivantes :
// http://localhost:8000
// http://localhost:8000/articles
// http://localhost:8000/bonjour/
// http://localhost:8000/bonjour?prenom=mike
// http://localhost:8000/bonjour?prenom=mike&id=3
// Que remarquez vous ?


// POUR STOPPER LE SERVEUR :
// <CTRL+C> dans le terminal