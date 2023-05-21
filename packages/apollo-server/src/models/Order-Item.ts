import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";

import Color from "./Color";
import Size from "./Size";
import Product from "./Product";

@Entity()
class OrderItem {
  @PrimaryColumn("uuid")
  id: string;

  @Column("int")
  quantity: number;

  @ManyToOne(() => Size)
  @JoinColumn()
  size: Size;

  @ManyToOne(() => Color)
  @JoinColumn()
  color: Color;

  @ManyToOne(() => Product)
  @JoinColumn()
  product: Product;

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

export default OrderItem;
