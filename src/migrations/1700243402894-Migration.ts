import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1700243402894 implements MigrationInterface {
    name = 'Migration1700243402894'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "listening" ADD "nextUrl" character varying`);
        await queryRunner.query(`ALTER TABLE "listening" ADD "lastUrl" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "listening" DROP COLUMN "lastUrl"`);
        await queryRunner.query(`ALTER TABLE "listening" DROP COLUMN "nextUrl"`);
    }

}
