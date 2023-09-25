import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entitie";

@Entity("listening")
export class Listening {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ nullable: true, type: "integer" })
  start: number | null;

  @Column({ nullable: true, type: "integer" })
  end: number | null;

  @Column()
  text: string;

  @Column({ nullable: true, type: "varchar" })
  help: string | null;

  @Column()
  url: string;

  @ManyToOne(() => User, (user) => user.listening, { onDelete: "CASCADE" })
  user: User;
}
