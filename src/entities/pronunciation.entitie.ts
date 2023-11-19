import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entitie";

@Entity("pronunciation")
export class Pronunciation {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ nullable: true, type: "varchar" })
  start: string | null | undefined;

  @Column()
  text: string;

  @Column({ nullable: true, type: "varchar" })
  help: string | null | undefined;

  @Column()
  url: string;

  @Column({ nullable: true, type: "varchar" })
  nextUrl: string | null | undefined;

  @Column({ nullable: true, type: "varchar" })
  lastUrl: string | null | undefined;

  @ManyToOne(() => User, (user) => user.pronunciation, { onDelete: "CASCADE" })
  user: User;
}
