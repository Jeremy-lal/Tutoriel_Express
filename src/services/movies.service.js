import { MovieRepository } from '../repositories/movie.repository';

export class MovieService {
    repository;

    constructor() {
        this.repository = new MovieRepository();
    }

    async getAll() {
        return await this.repository.getAll();
    }

    async saveMovie(movie) {
        return await this.repository.save(movie);
    }

    async updateMovie(movie, id) {
        return await this.repository.update(movie, id);
    }

    async deleteMovie(id) {
        return await this.repository.delete(id);
    }

}