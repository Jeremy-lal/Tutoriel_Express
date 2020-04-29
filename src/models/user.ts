export class User {
    private id!: number;
    private firstname!: string;
    private lastname!: string;
    private identifiant!: string;
    private pwd!: string;

    constructor(input: User) {
        Object.assign(this, input);
    }
}
