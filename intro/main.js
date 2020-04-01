const http = require('http'); // inclure le module nommé "http"


console.log("Hello World !"); // Affiche "hello world dans la console"


// Création d'un serveur HTTP
// la fonction envoyée en paramètre sera exécutée à chaque requête envoyée vers ce serveur
const webServer = http.createServer(function(requete, reponse) {

    reponse.writeHead(200); // écriture des entêtes HTPP (code de réponse 200 = OK)

    let hello = 'Hello world !'; // contenu à renvoyer

    reponse.end(hello); // on termine la réponse. La paramètre correspond au contenu qui sera affiché chez le client qui a initié la requête.
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
// Que remarquez vous ?


// POUR STOPPER LE SERVEUR :
// <CTRL+C> dans le terminal