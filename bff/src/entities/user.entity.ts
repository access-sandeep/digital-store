import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Address } from './address.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usergroup_id: number;

  @Column()
  address_id: number;

  @OneToMany(() => Address, (address) => address.user)
  @JoinColumn()
  addresses: Address[];

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  full_name: string;

  @Column()
  createddate: Date;

  @Column()
  updatedate: Date;
}
