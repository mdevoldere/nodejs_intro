const readline = require('readline');

const ets = require('./ets.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const employees = {
    jack: new ets.Employee('Jack', ''),
    john: new ets.Employee('John', ''),
    sandy: new ets.Manager('Sandy', 'Direction'),
    mike: new ets.Developer('Mike'),
};

console.log(employees);
console.log(employees.jack.__proto__);

console.log(employees.sandy.__proto__);
console.log(employees.sandy.name);

console.log(employees.mike.__proto__);
console.log(employees.mike.name);

rl.question('Choisissez un employé ', (answer) => {
    console.log('vous avez saisi: ' + answer);
    rl.close();
});