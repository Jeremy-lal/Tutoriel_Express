import mysql from 'mysql';

const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'user', // nom d'utilisateur
password :  'pwd', // mot de passe
database :  'bdd1', // nom de la bdd
});

module.exports = connection;