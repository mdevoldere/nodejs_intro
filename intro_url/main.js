const http = require('http');
const url = require('url'); // permet de manipuler les url


const webServer = http.createServer(function(requete, reponse) {

    let req = url.parse(requete.url); // analyse de l'url de la requête

    let path = req.pathname; // récupération de la partie "pathname" de l'url (partie se trouvant après localhost:8000) correspondant au chemin demandé sur le serveur

    console.log(path); // affichage du chemin demandé

    var str = ''; // contiendra le contenu de la réponse

    // le chemin demandé doit correspondre à un des cas suivants
    // si pas de correspondance, une erreur 404 est levée (cas par défaut)
    switch(path) 
    {
        case '/':
            reponse.writeHead(200); // code HTTP 200 = OK
            str = "Bienvenue";
            break;
        case '/hello':
            reponse.writeHead(200, {"Content-Type": "text/html; charset=utf-8"}); // on précise le type de contenu HTML et le jeu de caractères
            str = "<h1>Hello world !</h1>"; // contenu HTML
            break;
        default:
            reponse.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"}); // on précise le type de contenu TEXT et le jeu de caractères
            str = "Non trouvé !";
            break;
    }
    
    reponse.end(str); // envoi de la réponse et fin de la requête
});


webServer.listen(8000);

// POUR LANCER LE SERVEUR :
// ouvrez un terminal
// naviguez jusqu'au répertoire de l'application
// lancez la commande: node main.js
// rendez vous ensuite sur http://localhost:8000 via votre navigateur
// essayez les URLS suivantes :
// http://localhost:8000
// http://localhost:8000/hello
// http://localhost:8000/bonjour/
// Que remarquez vous ?


// POUR STOPPER LE SERVEUR :
// <CTRL+C> dans le terminal