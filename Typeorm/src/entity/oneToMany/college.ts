import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./student";
@Entity()
export class College {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  collegeName: string;

  @OneToMany(() => Student, (stud) => stud.college)
  students: Student[]
}
