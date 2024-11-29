import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usergroup_id: number;

  @Column()
  address_id: number;

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