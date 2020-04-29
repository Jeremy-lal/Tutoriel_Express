import { Movie } from './../models/movie';
import { MovieRepository } from '../repositories/movie.repository';

export class MovieService {
    private repository: MovieRepository;

    constructor() {
        this.repository = new MovieRepository();
    }

    async getAll() {
        return await this.repository.getAll();
    }

    async saveMovie(movie: Movie) {
        return await this.repository.save(movie);
    }

    async updateMovie(movie: Movie, id: number) {
        return await this.repository.update(movie, id);
    }

    async deleteMovie(id: number) {
        return await this.repository.delete(id);
    }

}