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

  @Column({ nullable: true, type: "varchar" })
  start: string | null;

  @Column({ nullable: true, type: "varchar" })
  end: string | null;

  @Column()
  text: string;

  @Column({ nullable: true, type: "varchar" })
  help: string | null;

  @Column()
  url: string;

  @Column({ nullable: true, type: "varchar" })
  nextUrl: string | null;

  @Column({ nullable: true, type: "varchar" })
  lastUrl: string | null;

  @ManyToOne(() => User, (user) => user.listening, { onDelete: "CASCADE" })
  user: User;
}
