import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entitie";

@Entity("listening")
export class Listening {
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

  @ManyToOne(() => User, (user) => user.listening, { onDelete: "CASCADE" })
  user: User;
}
