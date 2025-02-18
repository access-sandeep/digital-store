import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  sku: string;

  @Column()
  description: string;

  @Column()
  short_description: string;

  @Column()
  stock_left: number;

  @Column()
  price: number;

  @Column()
  discount: number;

  @Column()
  max_order_units: number;

  @CreateDateColumn()
  createddate: Date;

  @UpdateDateColumn()
  updatedate: Date;
}
