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
  start: string | null;

  @Column({ nullable: true, type: "varchar" })
  end: string | null;

  @Column()
  text: string;

  @Column({ nullable: true, type: "varchar" })
  help: string | null;

  @Column()
  url: string;

  @ManyToOne(() => User, (user) => user.pronunciation, { onDelete: "CASCADE" })
  user: User;
}
