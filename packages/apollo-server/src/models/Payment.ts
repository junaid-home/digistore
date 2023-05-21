import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
class Payment {
  @PrimaryColumn("uuid")
  id: string;

  @Column("varchar", { length: 50 })
  method: string;

  @Column("int")
  amount: number;

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

export default Payment;
