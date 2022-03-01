import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBooks1645854936770 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "books",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "isbn_13",
            type: "varchar(13)",
          },
          {
            name: "isbn_10",
            type: "varchar(10)",
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "number_of_pages",
            type: "integer",
          },
          {
            name: "edition_count",
            type: "smallint",
          },
          {
            name: "cover",
            type: "varchar",
          },
          {
            name: "author_id",
            type: "uuid",
          },
          {
            name: "publish_date",
            type: "varchar",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKAuthorBookSingle",
            columnNames: ["author_id"],
            referencedTableName: "authors",
            referencedColumnNames: ["id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("books", "FKAuthorBookSingle");
    await queryRunner.dropTable("books");
  }
}
