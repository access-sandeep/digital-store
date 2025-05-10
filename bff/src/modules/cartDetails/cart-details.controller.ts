import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CartDetailsService } from './cart-details.service';
import { CartDetailsDto } from './models/cart_details.dto';
import { ApiTags } from '@nestjs/swagger';
import { EndpointTags } from 'src/shared/enums/controller-tags.enum';
import { CartDetails } from 'src/entities/cart_details.entity';

@Controller('cart-details')
@ApiTags(EndpointTags.CartDetails)
export class CartDetailsController {
  constructor(private readonly cartDetailsService: CartDetailsService) {}

  @Get()
  async findAll(): Promise<CartDetails[]> {
    return await this.cartDetailsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<CartDetails> {
    return await this.cartDetailsService.findOne(id);
  }

  @Post()
  async add(@Body() cartDetailsDto: CartDetailsDto) {
    await this.cartDetailsService.add(cartDetailsDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.cartDetailsService.remove(id);
  }
}
