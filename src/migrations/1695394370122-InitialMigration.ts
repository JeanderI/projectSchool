import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1695394370122 implements MigrationInterface {
    name = 'InitialMigration1695394370122'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pronunciation" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "model" character varying NOT NULL, "text" character varying NOT NULL, "audio" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_03d09e54a54345f930fc5288b11" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "listening" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "model" character varying NOT NULL, "text" character varying NOT NULL, "audio" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_385522e31afc7cd2f023ce24ee9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pronunciation" ADD CONSTRAINT "FK_534d4a259991e843e878acb68ed" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "listening" ADD CONSTRAINT "FK_e8199836c0e6d37116fd944660b" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "listening" DROP CONSTRAINT "FK_e8199836c0e6d37116fd944660b"`);
        await queryRunner.query(`ALTER TABLE "pronunciation" DROP CONSTRAINT "FK_534d4a259991e843e878acb68ed"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "listening"`);
        await queryRunner.query(`DROP TABLE "pronunciation"`);
    }

}
