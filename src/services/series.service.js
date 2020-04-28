import { SerieRepository } from '../repositories/serie.repository';

export class SerieService {
    repository;

    constructor() {
        this.repository = new SerieRepository();
    }

    async getAll() {
        const result = await this.repository.getAll()
        return result[0];
    }

    async saveSerie(serie) {
        return await this.repository.save(serie);
    }

    async updateSerie(serie, id) {
        return await this.repository.update(serie, id);
    }

    async deleteSerie(id) {
        return await this.repository.delete(id);
    }

}