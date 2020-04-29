import { TokenRepository } from '../repositories/token.repository';
import { Token } from 'src/models/token';

export class TokenService {

    repository: TokenRepository;

    constructor() {
        this.repository = new TokenRepository();
    }


    async create(token: Token) {
        return await this.repository.save(token);
    }

    getByValue(value: string) {
        return this.repository.getByValue(value);
    }

}
