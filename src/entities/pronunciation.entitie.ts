import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entitie";

@Entity("pronunciation")
export class Pronunciation {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  model: string;

  @Column()
  text: string;

  @Column()
  audio: string;

  @ManyToOne(() => User, (user) => user.pronunciation, { onDelete: "CASCADE" })
  user: User;
}
