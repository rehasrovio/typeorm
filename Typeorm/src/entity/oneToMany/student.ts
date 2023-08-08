import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { College } from "./college"

@Entity()
export class Student{
    @PrimaryGeneratedColumn()
    Id: number

    @Column()
    name: string

    @ManyToOne(() => College, (coll)=> coll.students)
    college: College
}