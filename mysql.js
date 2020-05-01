const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.host, // adresse du serveur
    user: process.env.user_mysql, // nom d'utilisateur
    password: process.env.pwd_mysql, // mot de passe
    database: 'tutoexpress', // nom de la bdd
});

module.exports = connection;