import { DbHandler } from './../core/db.handler';
import { Movie } from './../models/movie';

export class MovieRepository {

    private GET_ALL = 'SELECT * FROM movies;';
    private POST_MOVIE = 'INSERT INTO movies SET ?';
    private UPDATE_MOVIE = 'UPDATE movies SET ? WHERE id = ?';
    private DELETE_MOVIE = 'DELETE FROM movies WHERE id = ?';
    private db: DbHandler;

    constructor() {
        this.db = DbHandler.getInstance();
    };

    async getAll() {
        const result = await this.db.query(this.GET_ALL) as Promise<Movie[]>;
        return result;
    }

    async save(movie: Movie) {
        const postUser = await this.db.query(this.POST_MOVIE, movie) as Promise<Movie>;
        return postUser;
    }

    async update(movie: Movie, id: number) {
        const updateMovie = await this.db.query(this.UPDATE_MOVIE, [movie, id]) as Promise<Movie>;
        return updateMovie;
    }

    async delete(id: number) {
        const deleteMovie = await this.db.query(this.DELETE_MOVIE, [id])
        return deleteMovie;
    }
}

