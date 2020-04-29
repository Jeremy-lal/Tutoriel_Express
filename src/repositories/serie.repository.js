import * as  connection from '../loaders/mysql';

export class SerieRepository {

    GET_ALL = 'SELECT * FROM series;';
    POST_SERIE = 'INSERT INTO series SET ?';
    UPDATE_SERIE = 'UPDATE series SET ? WHERE id = ?';
    DELETE_SERIE = 'DELETE FROM series WHERE id = ?';

    constructor() { }

    async getAll() {
        const result = await (connection.query(this.GET_ALL));
        return result;
    }

    async save(serie) {
        const postUser = await connection.query(this.POST_SERIE, serie);
        return postUser;
    }

    async update(serie, id) {
        const updateSerie = await connection.query(this.UPDATE_SERIE, [serie, id]);
        return updateSerie;
    }

    async delete(id) {
        const deleteSerie = await connection.query(this.DELETE_SERIE, [id]);
        return deleteSerie;
    }
}

