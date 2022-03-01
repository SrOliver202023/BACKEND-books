import { Author } from "@modules/authors/infra/typeorm/entities/Author";
import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

// import { Author } from "../../../../authors/infra/typeorm/entities/Author";

@Entity("books")
class Book {
  @PrimaryColumn()
  id?: string;

  @Column()
  isbn_13: string;

  @Column()
  isbn_10: string;

  @Column()
  title: string;

  @Column()
  number_of_pages: number;

  @Column()
  edition_count: number;

  @Column()
  cover: string;

  @ManyToOne(() => Author)
  @JoinColumn({ name: "author_id" })
  author: Author;

  @Column()
  author_id: string;

  @Column()
  publish_date: string;

  @UpdateDateColumn()
  updated_at?: Date;

  @CreateDateColumn()
  created_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Book };
