import { UserRepository } from '../repositories/user.repository';
import { User } from '../models/user';

export class UserService {

    private repository: UserRepository;

    constructor() {
        this.repository = new UserRepository();
    }

    async getAll() {
        const all: User[] = await this.repository.findAll();
        return all;
    }

    async getById(id: number) {
        if (!Number.isInteger(id)) {
            throw new Error('error');
        }
        return await this.repository.findById(id);
    }

    async getByIdentifiant(identifiant: string) {
        return await this.repository.findByIdentifiant(identifiant);
    }

    async saveUser(user: User) {
        return this.repository.save(user);
    }

    async updateUser(user: User, id: number) {
        return this.repository.modify(user, id);
    }

    async deleteUser(id: number) {
        return this.repository.delete(id);
    }
}