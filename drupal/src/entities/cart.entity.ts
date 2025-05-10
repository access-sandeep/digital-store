import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('cart')
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cart_type: string;

  @Column()
  expiry_number: number;

  @Column()
  expiry_unit: string;

  @Column()
  active: string;

  @CreateDateColumn()
  createddate: Date;
}
