import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartDetailsDto } from './models/cart_details.dto';
import { CartDetails } from '../../entities/cart_details.entity';
import { CartService } from '../cart/cart.service';
import { ProductsService } from '../products/products.service';

@Injectable()
export class CartDetailsService {
  constructor(
    @InjectRepository(CartDetails)
    private cartDetailsRepository: Repository<CartDetails>,
    private cartService: CartService,
    private productsService: ProductsService,
  ) {}

  findAll(): Promise<CartDetails[]> {
    return this.cartDetailsRepository.query('select * from cart_details');
  }

  async findOne(id: string): Promise<CartDetails | null> {
    return await this.cartDetailsRepository.findOneBy({ id });
  }

  async add(createCartDetailsData: CartDetailsDto): Promise<void> {
    const user_id = createCartDetailsData.user_id;
    const product_id = createCartDetailsData.product_id;
    const cart_to_create = {
      user_id: user_id,
    };

    const cart_id = await this.cartService.add(cart_to_create);

    const quantity = createCartDetailsData.quantity;
    const product_details = await this.productsService.findOne(product_id);

    const product_price = product_details.price;

    const discount = product_details.discount;
    const discounted_product_price =
      product_price - product_price * (discount / 100);
    const total_price = discounted_product_price * quantity;
    const id = new Date().getTime().toString();
    const data_to_save = {
      id,
      user_id,
      cart_id,
      product_id,
      quantity,
      total_price,
    };
    await this.cartDetailsRepository.save(data_to_save);
  }

  async remove(id: string): Promise<void> {
    await this.cartDetailsRepository.delete(id);
  }
}
