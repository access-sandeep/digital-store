import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartDetailsController } from './cart-details.controller';
import { CartDetailsService } from './cart-details.service';
import { CartDetails } from 'src/entities/cart_details.entity';
import { ProductsService } from '../products/products.service';
import { CartService } from '../cart/cart.service';
import { Cart } from 'src/entities/cart.entity';
import { Products } from 'src/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartDetails, Cart, Products])],
  controllers: [CartDetailsController],
  providers: [CartDetailsService, ProductsService, CartService],
})
export class CartDetailsModule {}
