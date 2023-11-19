import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1700431867975 implements MigrationInterface {
    name = 'Migration1700431867975'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pronunciation" ADD "nextUrl" character varying`);
        await queryRunner.query(`ALTER TABLE "pronunciation" ADD "lastUrl" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pronunciation" DROP COLUMN "lastUrl"`);
        await queryRunner.query(`ALTER TABLE "pronunciation" DROP COLUMN "nextUrl"`);
    }

}
