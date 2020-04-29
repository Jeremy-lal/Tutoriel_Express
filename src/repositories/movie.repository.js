import * as  connection from '../loaders/mysql';

export class MovieRepository {

    GET_ALL = 'SELECT * FROM movies;';
    POST_MOVIE = 'INSERT INTO movies SET ?';
    UPDATE_MOVIE = 'UPDATE movies SET ? WHERE id = ?';
    DELETE_MOVIE = 'DELETE FROM movies WHERE id = ?';

    constructor() { }

    async getAll() {
        const result = await connection.query(this.GET_ALL);
        return result;
    }

    async save(movie) {
        const postUser = await connection.query(this.POST_MOVIE, user);
        return postUser;
    }

    async update(movie, id) {
        const updateMovie = await connection.query(this.UPDATE_MOVIE, [user, id]);
        return updateMovie;
    }

    async delete(id) {
        const deleteMovie = await connection.query(this.DELETE_MOVIE, [id])
        return deleteMovie;
    }
}

