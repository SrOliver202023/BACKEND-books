import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("authors")
class Author {
  @PrimaryColumn()
  id?: string;

  @Column()
  ol: string;

  @Column()
  name: string;

  @Column()
  bio?: string;

  @Column()
  birth?: string;

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

export { Author };
