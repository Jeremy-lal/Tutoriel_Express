import { DbHandler } from './../core/db.handler';
import { Serie } from '../models/series';

export class SerieRepository {

    private GET_ALL = 'SELECT * FROM series;';
    private POST_SERIE = 'INSERT INTO series SET ?';
    private UPDATE_SERIE = 'UPDATE series SET ? WHERE id = ?';
    private DELETE_SERIE = 'DELETE FROM series WHERE id = ?';
    private db: DbHandler

    constructor() {
        this.db = DbHandler.getInstance();
     }

    async getAll() {
        const result = await this.db.query(this.GET_ALL) as Promise<Serie[]>;
        return result;
    }

    async save(serie: Serie) {
        const postUser = await this.db.query(this.POST_SERIE, serie) as Promise<Serie>;
        return postUser;
    }

    async update(serie: Serie, id: number) {
        const updateSerie = await this.db.query(this.UPDATE_SERIE, [serie, id]) as Promise<Serie>;
        return updateSerie;
    }

    async delete(id: number) {
        const deleteSerie = await this.db.query(this.DELETE_SERIE, [id]);
        return deleteSerie;
    }
}

