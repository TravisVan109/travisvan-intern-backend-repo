import { MigrationInterface, QueryRunner } from "typeorm";

export class InitItem1775565434483 implements MigrationInterface {
    name = 'InitItem1775565434483'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "item" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "quantity" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "item"`);
    }

}
