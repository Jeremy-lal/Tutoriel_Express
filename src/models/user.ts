export class User {
    public id!: number;
    public firstname!: string;
    public lastname!: string;
    public identifiant!: string;
    public pwd!: string;

    constructor(input: User) {
        Object.assign(this, input);
    }
}
