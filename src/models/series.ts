export class Serie {
    public id!: number;
    public title!: string;
    public category!: string;

    constructor(input: Serie) {
        Object.assign(this, input);
    }
}