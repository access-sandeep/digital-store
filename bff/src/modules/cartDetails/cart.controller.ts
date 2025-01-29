import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartDetailsDto } from './models/cart_details.dto';
import { ApiTags } from '@nestjs/swagger';
import { EndpointTags } from 'src/shared/enums/controller-tags.enum';
import { Cart } from 'src/entities/cart.entity';
import { CartUserProduct } from 'src/entities/cart_user_product.entity copy';

@Controller('cart')
@ApiTags(EndpointTags.Cart)
export class CartController {
  constructor(private readonly CartService: CartService) {}

  @Get()
  async findAll(): Promise<Cart[]> {
    return await this.CartService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Cart> {
    return await this.CartService.findOne(id);
  }

  @Post()
  async add(@Body() CartDto: CartDetailsDto) {
    await this.CartService.add(CartDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.CartService.remove(id);
  }
}
