import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    Id: number
    @Column()
    name: string
}