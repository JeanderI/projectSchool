import { getRounds, hashSync } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { Pronunciation } from "./pronunciation.entitie";
import { Listening } from "./listening.entitie";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true, type: "varchar" })
  photo: string | null;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Pronunciation, (pronunciation) => pronunciation.user)
  pronunciation: Pronunciation[];

  @OneToMany(() => Listening, (listening) => listening.user)
  listening: Listening[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isHashed = getRounds(this.password);
    if (!isHashed) {
      this.password = hashSync(this.password, 10);
    }
  }
}
