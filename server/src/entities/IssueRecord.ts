import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Book } from "./Book";
import { User } from "./User";

@Entity()
export class IssueRecord {
  @PrimaryGeneratedColumn()
  id!: number;
  @ManyToOne(() => User, { nullable: false })
  user!: User;

  @ManyToOne(() => Book, { nullable: false })
  book!: Book;

  @CreateDateColumn()
  issuedAt!: Date;

  @UpdateDateColumn()
  returnedAt!: Date | null;
}
