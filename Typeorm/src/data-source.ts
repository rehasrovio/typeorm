import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Employee } from "./entity/employee"
import { Profile } from "./entity/uprofile";

export const AppDataSource = new DataSource({
    type: "mysql",
    host : "localhost",
    port : 3306,
    username : "root",
    password : "root",
    database : "typeorm",
    synchronize: true,
    logging: true,
    entities: [User,Employee,Profile],
    migrations: [],
    subscribers: [],
    dropSchema: true
})
