import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration21695672845158 implements MigrationInterface {
    name = 'InitialMigration21695672845158'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pronunciation" ALTER COLUMN "start" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pronunciation" ALTER COLUMN "end" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pronunciation" DROP COLUMN "help"`);
        await queryRunner.query(`ALTER TABLE "pronunciation" ADD "help" integer`);
        await queryRunner.query(`ALTER TABLE "listening" ALTER COLUMN "start" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "listening" ALTER COLUMN "end" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "listening" DROP COLUMN "help"`);
        await queryRunner.query(`ALTER TABLE "listening" ADD "help" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "listening" DROP COLUMN "help"`);
        await queryRunner.query(`ALTER TABLE "listening" ADD "help" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "listening" ALTER COLUMN "end" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "listening" ALTER COLUMN "start" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pronunciation" DROP COLUMN "help"`);
        await queryRunner.query(`ALTER TABLE "pronunciation" ADD "help" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pronunciation" ALTER COLUMN "end" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pronunciation" ALTER COLUMN "start" SET NOT NULL`);
    }

}
