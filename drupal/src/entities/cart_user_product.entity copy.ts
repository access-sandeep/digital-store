import { Entity, Column, CreateDateColumn } from 'typeorm';

@Entity('cart_user_product')
export class CartUserProduct {
  @Column()
  cart_id: string;

  @Column()
  cart_cart_type: string;

  @Column()
  cart_expiry_number: number;

  @Column()
  cart_expiry_unit: string;

  @Column()
  cart_active: string;

  @CreateDateColumn()
  cart_createddate: Date;

  @Column()
  user_id: string;

  @Column()
  user_usergroup_id: number;

  @Column()
  user_usergroup_name: string;

  @Column()
  user_usergroup_full_admin_access: number;

  @Column()
  user_usergroup_product_update_admin_access: number;

  @Column()
  user_usergroup_transaction_details_previledge: number;

  @Column()
  user_usergroup_disacount_update_access: number;

  @Column()
  user_usergroup_full_customer_access: number;

  @Column()
  user_usergroup_partial_blocked_customer: number;

  @Column()
  user_usergroup_fully_blocked_customer: number;

  @Column()
  user_address_id: number;

  @Column()
  address_line1: string;

  @Column()
  address_line2: string;

  @Column()
  address_country: string;

  @Column()
  address_state: string;

  @Column()
  address_city: string;

  @Column()
  address_postcode: string;

  @Column()
  user_email: string;

  @Column()
  user_full_name: string;

  @CreateDateColumn()
  user_createddate: Date;

  @Column()
  product_id: string;

  @Column()
  product_name: string;

  @Column()
  product_sku: string;

  @Column()
  product_description: string;

  @Column()
  product_short_description: string;

  @Column()
  product_stock_left: number;

  @Column()
  product_price: number;

  @Column()
  product_discount: number;

  @Column()
  product_max_order_units: number;

  @CreateDateColumn()
  product_createddate: Date;

  @Column()
  product_updatedate: Date;

  @Column()
  cart_details_quantity: number;

  @Column()
  cart_details_total_price: number;
}
