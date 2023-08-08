import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Actor } from "./actors";
@Entity()
export class Movie{
    @PrimaryGeneratedColumn()
    Id:number
    @Column()
    title: string

    @ManyToMany(() => Actor, (actor) => actor.movies)
    actors: Actor[]
}