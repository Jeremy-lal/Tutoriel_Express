import mysql from 'mysql';
import { DbHandler } from '../core/db.handler';

export default async () => {


    const connexion = mysql.createConnection({
        host: process.env.host, // adresse du serveur
        user: process.env.user_mysql, // nom d'utilisateur
        password: process.env.pwd_mysql, // mot de passe
        database: 'tutoexpress', // nom de la bdd
    });

    DbHandler.getInstance(connexion);

    connexion.connect( (err) => {
        if (err) { throw err; }
        console.log('Connected!');
    });

    return connexion;
};