export class Movie {
    public id!: number;
    public title!: string;
    public category!: string

    constructor(input: Movie) {
        Object.assign(this, input);
    }
}