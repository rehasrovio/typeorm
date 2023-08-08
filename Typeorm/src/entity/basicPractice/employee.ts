import{ Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { Name } from "./name";
@Entity()
export class Employee{
    @PrimaryGeneratedColumn()
    id: number

    @Column(()=> Name)
    name: Name;

    @Column()
    salary: number


}