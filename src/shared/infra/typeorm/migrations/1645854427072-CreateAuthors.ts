import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAuthors1645854427072 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "authors",
        columns: [
          {
            name: "id",
            type: "UUID",
            isPrimary: true,
          },
          {
            name: "ol",
            type: "VARCHAR(255)",
          },
          {
            name: "name",
            type: "VARCHAR(255)",
          },
          {
            name: "bio",
            type: "VARCHAR(255)",
          },
          {
            name: "birth",
            type: "VARCHAR(255)",
          },
          {
            name: "updated_at",
            type: "TIMESTAMP",
            default: "NOW()",
          },
          {
            name: "created_at",
            type: "TIMESTAMP",
            default: "NOW()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("authors");
  }
}
