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

  @CreateDateColumn()
  createddate: Date;

  @UpdateDateColumn()
  updatedate: Date;
}
