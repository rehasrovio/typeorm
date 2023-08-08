import "reflect-metadata"
import { DataSource } from "typeorm"
import { Actor } from "../entity/manyToMany/example2/actors"
import { Movie } from "../entity/manyToMany/example2/movies"

export const AppDataSource = new DataSource({
    type: "mysql",
    host : "localhost",
    port : 3306,
    username : "root",
    password : "root",
    database : "sys",
    synchronize: true,
    logging: true,
    entities: [Actor, Movie],
    migrations: [],
    subscribers: [],
    dropSchema: true
})
