import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartDetailsDto } from './models/cart_details.dto';
import { Cart } from 'src/entities/cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
  ) {}

  findAll(): Promise<Cart[]> {
    //return this.cartRepository.find();
    return this.cartRepository.query('select * from cart');
  }

  findOne(id: string): Promise<Cart | null> {
    return this.cartRepository.findOneBy({ id });
  }

  async add(createCartDetailsData: CartDetailsDto): Promise<void> {
    const generated_unique_id =
      Date.now().toString() + '--' + createCartDetailsData.user_id;
    console.log(createCartDetailsData.product_id, generated_unique_id);
    const createCartData = {
      id: generated_unique_id,
      cart_type: 'buy_now',
      expiry_number: 0,
      expiry_unit: 'MONTHS',
      active: 'YES_ACTIVE',
      createddate: new Date(),
    };
    await this.cartRepository.insert(createCartData);
  }

  async remove(id: string): Promise<void> {
    await this.cartRepository.delete(id);
  }
}
