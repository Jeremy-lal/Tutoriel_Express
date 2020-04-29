import mysql from 'mysql';
import { DbHandler } from '../core/db.handler';

export default async () => {


    const connexion = mysql.createConnection({
        host: 'localhost', // adresse du serveur
        user: 'user', // nom d'utilisateur
        password: 'pwd', // mot de passe
        database: 'bdd1', // nom de la bdd
    });

    DbHandler.getInstance(connexion);

    connexion.connect( (err) => {
        if (err) { throw err; }
        console.log('Connected!');
    });

    return connexion;
};