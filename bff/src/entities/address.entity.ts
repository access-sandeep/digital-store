import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('address')
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address_line1: string;

  @Column()
  address_line2: string;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  postcode: string;

  @ManyToOne(() => User, (user) => user.addresses)
  @JoinColumn()
  user: User;
}
