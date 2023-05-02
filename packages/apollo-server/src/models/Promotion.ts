import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

import Product from "./Product";

@Entity()
class Promotion {
  @PrimaryColumn("uuid")
  id: string;

  @Column("varchar", { length: 50 })
  name: string;

  @Column("varchar")
  desc: string;

  @Column("boolean")
  active: boolean;

  @Column("decimal")
  discount_percentage: number;

  @Column("timestamp")
  expiry_date: Date;

  @OneToMany(() => Product, (product) => product.promotion)
  product: string;

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

export default Promotion;
