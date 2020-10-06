const express = require('express');
const ets = require('./ets.js');

const app = express();


const employees = {
    jack: new ets.Employee('Jack', ''),
    john: new ets.Employee('John', ''),
    sandy: new ets.Manager('Sandy', 'Direction'),
    mike: new ets.Developer('Mike'),
};



app.get('/', function(requete, reponse) {
    //console.log(requete);
    reponse.setHeader('Content-Type', 'application/json; charset=utf-8');
    reponse.send('{"result": "Hello"}');
});


app.get('/employees', function(requete, reponse) {
    reponse.setHeader('Content-Type', 'application/json; charset=utf-8');
    let json = JSON.stringify(employees);
    console.log(json);
    reponse.send(json);
});

// http://localhost:8000/employee/?nom=jack
app.get('/employee', function(requete, reponse) {
    
    let nom = requete.query.nom;

    let employees_index = Object.keys(employees);

    reponse.setHeader('Content-Type', 'application/json; charset=utf-8');

    if(employees_index.includes(nom)) {
        let mon_employe = employees[nom]; 
        console.log(mon_employe);
        var json = JSON.stringify(mon_employe);
    }
    else {
        console.log('non trouvé');
        var json = '{"result": false}';
    }

    console.log(nom);
    console.log(employees_index);
    
    //console.log(json);
    reponse.send(json);
});

// http://localhost:8000/employee?nom=jack&vue=articles&id_article=3
// http://localhost:8000/user/jack/articles/3
app.get('/user/:nom/articles/:id', function(requete, reponse) {

});


// http://localhost:8000/user/jack
app.get('/user/:nom', function(requete, reponse) {
    
    let nom = requete.params.nom;

    let employees_index = Object.keys(employees);

    reponse.setHeader('Content-Type', 'application/json; charset=utf-8');

    if(employees_index.includes(nom)) {
        let mon_employe = employees[nom]; 
        console.log(mon_employe);
        var json = JSON.stringify(mon_employe);
    }
    else {
        console.log('non trouvé');
        var json = '{"result": false}';
    }

    console.log(nom);
    console.log(employees_index);
    
    //console.log(json);
    reponse.send(json);
});





app.listen(8000);