import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration31695673005634 implements MigrationInterface {
    name = 'InitialMigration31695673005634'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pronunciation" DROP COLUMN "help"`);
        await queryRunner.query(`ALTER TABLE "pronunciation" ADD "help" character varying`);
        await queryRunner.query(`ALTER TABLE "listening" DROP COLUMN "help"`);
        await queryRunner.query(`ALTER TABLE "listening" ADD "help" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "listening" DROP COLUMN "help"`);
        await queryRunner.query(`ALTER TABLE "listening" ADD "help" integer`);
        await queryRunner.query(`ALTER TABLE "pronunciation" DROP COLUMN "help"`);
        await queryRunner.query(`ALTER TABLE "pronunciation" ADD "help" integer`);
    }

}
