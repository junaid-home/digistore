import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from "typeorm";

import Category from "./Category";
import Promotion from "./Promotion";
import Size from "./Size";
import Color from "./Color";
import Image from "./Image";

@Entity()
class Product {
  @PrimaryColumn("uuid")
  id: string;

  @Column("varchar", { length: 255 })
  name: string;

  @Column("varchar")
  slug: string;

  @Column("varchar")
  summary: string;

  @Column("text")
  desc: string;

  @Column("decimal")
  market_price: number;

  @Column("decimal")
  selling_price: number;

  @Column("decimal")
  ratings: number;

  @ManyToOne(() => Promotion, (promotion) => promotion.product)
  @JoinColumn()
  promotion: Promotion;

  @ManyToOne(() => Category, (category) => category.product)
  @JoinColumn()
  category: Category;

  @ManyToMany(() => Size)
  @JoinTable()
  sizes: Size[];

  @ManyToMany(() => Color)
  @JoinTable()
  colors: Color[];

  @ManyToMany(() => Image)
  @JoinTable()
  gallery: Image[];

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

export default Product;
