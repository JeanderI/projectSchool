import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1700093630579 implements MigrationInterface {
    name = 'InitialMigration1700093630579'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "listening" ADD "end" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "listening" DROP COLUMN "end"`);
    }

}
