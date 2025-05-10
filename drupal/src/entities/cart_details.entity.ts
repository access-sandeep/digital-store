import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cart_details')
export class CartDetails {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: number;

  @Column()
  cart_id: string;

  @Column()
  product_id: string;

  @Column()
  quantity: number;

  @Column()
  total_price: number;
}
