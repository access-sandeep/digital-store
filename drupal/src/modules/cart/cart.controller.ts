import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CartDto } from './models/cart.dto';
import { ApiTags } from '@nestjs/swagger';
import { EndpointTags } from '../../shared/enums/controller-tags.enum';
import { Cart } from '../../entities/cart.entity';

@Controller('cart')
@ApiTags(EndpointTags.Cart)
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  async findAll(): Promise<Cart[]> {
    return await this.cartService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Cart> {
    return await this.cartService.findOne(id);
  }

  @Post()
  async add(@Body() cartDto: CartDto) {
    await this.cartService.add(cartDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() cartDto: CartDto,
  ): Promise<void> {
    await this.cartService.update(id, cartDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.cartService.remove(id);
  }

  @Delete()
  async clear() {
    await this.cartService.clear();
  }
}
