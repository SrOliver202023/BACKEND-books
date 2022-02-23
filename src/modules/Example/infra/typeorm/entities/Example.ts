import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("examples")
class Example {
  @PrimaryColumn()
  id: string;

  @Column()
  columnExample: string;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (this.id) {
      this.id = uuidV4();
    }
  }
}

export { Example };
