import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
  ManyToOne,
  Relation,
  ManyToMany,
  JoinTable,
} from "typeorm";

import User from "./User";
import Payment from "./Payment";
import OrderItem from "./Order-Item";

@Entity()
class Order {
  @PrimaryColumn("uuid")
  id: string;

  @Column("varchar", { length: 50 })
  status: string;

  @OneToOne(() => Payment, { onDelete: "CASCADE" })
  @JoinColumn()
  payment: Payment;

  @ManyToOne(() => User, (user) => user.orders, { onDelete: "CASCADE" })
  @JoinColumn()
  user: Relation<User>;

  @ManyToMany(() => OrderItem)
  @JoinTable()
  items: OrderItem[];

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

export default Order;
