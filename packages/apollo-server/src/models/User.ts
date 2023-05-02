import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";

import Product from "./Product";

@Entity()
class User {
  @PrimaryColumn("uuid")
  id: string;

  @Column("varchar", { length: 50 })
  name: string;

  @Column("varchar", { unique: true })
  email: string;

  @Column("varchar", { length: 11 })
  phone: string;

  @Column("varchar")
  password: string;

  @Column("varchar")
  salt: string;

  @ManyToMany(() => Product)
  @JoinTable()
  likes: Product[];

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  public updated_at: Date;
}

export default User;
