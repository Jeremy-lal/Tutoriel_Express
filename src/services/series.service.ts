import { Serie } from '../models/series';
import { SerieRepository } from '../repositories/serie.repository';

export class SerieService {
    private repository: SerieRepository;

    constructor() {
        this.repository = new SerieRepository();
    }

    async getAll() {
        const result = await this.repository.getAll()
        return result[0];
    }

    async saveSerie(serie: Serie) {
        return await this.repository.save(serie);
    }

    async updateSerie(serie: Serie, id: number) {
        return await this.repository.update(serie, id);
    }

    async deleteSerie(id: number) {
        return await this.repository.delete(id);
    }

}