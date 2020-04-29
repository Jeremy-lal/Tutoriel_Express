export class Token {
    public id?: number;
    public value!: string;
    public user_id!: number;

    constructor(input: Token) {
        Object.assign(this, input);
    }
}