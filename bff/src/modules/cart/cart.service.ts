import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartDto } from './models/cart.dto';
import { Cart } from '../../entities/cart.entity';
import { CartExpiry } from '../../shared/enums/cart_expiry.enum';
import { CartTypes } from '../../shared/enums/cart_type.enum';
import { CartStatus } from '../../shared/enums/cart_status.enum';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
  ) {}

  findAll(): Promise<Cart[]> {
    return this.cartRepository.find();
  }

  findOne(id: string): Promise<Cart | null> {
    return this.cartRepository.findOneBy({ id });
  }

  async add(createCartDetailsData: CartDto): Promise<string> {
    const generated_unique_id =
      Date.now().toString() + '_' + createCartDetailsData.user_id;
    const createCartData = {
      id: generated_unique_id,
      cart_type: createCartDetailsData.cart_type
        ? createCartDetailsData.cart_type
        : CartTypes.BUY_NOW,
      expiry_number: createCartDetailsData.expiry_number
        ? createCartDetailsData.expiry_number
        : 0,
      expiry_unit: createCartDetailsData.expiry_unit
        ? createCartDetailsData.expiry_unit
        : CartExpiry.MONTHS,
      active: createCartDetailsData.active
        ? createCartDetailsData.active
        : CartStatus.YES_ACTIVE,
      createddate: new Date(),
    };

    await this.cartRepository.insert(createCartData);
    return generated_unique_id;
  }

  async update(id, createCartDetailsData: CartDto): Promise<void> {
    const originalCartData = await this.findOne(id);
    const createCartData = {
      cart_type: createCartDetailsData.cart_type
        ? createCartDetailsData.cart_type
        : originalCartData.cart_type,
      expiry_number: createCartDetailsData.expiry_number
        ? createCartDetailsData.expiry_number
        : originalCartData.expiry_number,
      expiry_unit: createCartDetailsData.expiry_unit
        ? createCartDetailsData.expiry_unit
        : originalCartData.expiry_unit,
      active: createCartDetailsData.active
        ? createCartDetailsData.active
        : originalCartData.active,
      createddate: originalCartData.createddate,
    };

    await this.cartRepository.update(id, createCartData);
  }

  async remove(id: string): Promise<void> {
    await this.cartRepository.delete(id);
  }

  async clear(): Promise<void> {
    await this.cartRepository.clear();
  }
}
