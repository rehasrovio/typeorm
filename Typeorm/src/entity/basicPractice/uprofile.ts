import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Profile{

    @PrimaryGeneratedColumn()
    id: number
    @Column()
    qualification: string
    @Column()
    gender: string
}