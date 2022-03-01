import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Works1645898073959 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "works",
        columns: [
          {
            name: "id",
            type: "UUID",
            isPrimary: true,
          },
          {
            name: "author_id",
            type: "UUID",
          },
          {
            name: "book_id",
            type: "UUID",
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
        foreignKeys: [
          {
            name: "FKAuthorBook",
            columnNames: ["author_id"],
            referencedTableName: "authors",
            referencedColumnNames: ["id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKBookAuthor",
            columnNames: ["book_id"],
            referencedTableName: "books",
            referencedColumnNames: ["id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("works", "FKAuthorBook");
    await queryRunner.dropForeignKey("works", "FKBookAuthor");
    await queryRunner.dropTable("works");
  }
}
