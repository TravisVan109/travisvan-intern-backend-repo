import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSensitiveDataToItem1776042362170 implements MigrationInterface {
    name = 'AddSensitiveDataToItem1776042362170'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ADD "sensitiveData" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "sensitiveData"`);
    }

}
