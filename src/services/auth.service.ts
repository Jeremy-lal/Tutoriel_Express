import { UserRepository } from '../repositories/user.repository';
import { TokenService } from './token.services';
import { User } from '../models/user';
import { sign } from 'jsonwebtoken';
import { hash, verify } from 'argon2';
import { randomBytes } from 'crypto';
import { Token } from '../models/token';

export class AuthService {
    private repository: UserRepository;
    private tokenService: TokenService;

    constructor() {
        this.repository = new UserRepository();
        this.tokenService = new TokenService();
    }

    async signUp(user: User) {
        const error = new Error('Invalid credentials');
        const userIdentifiant = await this.repository.findByIdentifiant(user.identifiant);

        if (userIdentifiant !== null) {
            throw error;
        } else {
            user.pwd = await hash(user.pwd);
            const userCreate = await this.repository.save(user);

            const tokenString = randomBytes(12).toString('hex');
            const token = new Token({ user_id: userCreate.insertId, value: tokenString });
            await this.tokenService.create(token);
        }
    }

    async signIn(identifiant: string, password: string) {
        const labelError = new Error('Invalide crendentials');

        const user = await this.repository.findByIdentifiant(identifiant);
        if (!user) {
            throw labelError;
        }

        const isValid = await verify(user.pwd, password);
        if (!isValid) {
            throw labelError;
        }

        const secret = 'ceciestmachainedecaracterequiestsecretnepasmettreenclair';
        if (!secret) {
            throw new Error('Pas de secret SETUP');
        }
        const token = sign({ id: user.id, username: user.identifiant }, secret);

        return { token, user };
    }
}
