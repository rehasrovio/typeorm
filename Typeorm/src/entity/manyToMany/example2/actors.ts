import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Movie } from "./movies";
@Entity()
export class Actor{
    @PrimaryGeneratedColumn()
    Id:number
    @Column()
    name: string

    @ManyToMany(() => Movie, (movie) => movie.actors)
    @JoinTable()
    movies: Movie[]
}