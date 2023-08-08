import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Category } from "./category"
@Entity()

export class Question{
    @PrimaryGeneratedColumn()
    Id: number
    @Column()
    title: string
    @Column()
    text: string

    @ManyToMany(() => Category)
    @JoinTable()
    categories: Category[]
}