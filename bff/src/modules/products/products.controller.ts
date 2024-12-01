import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsDto } from './models/products.dto';
import { ApiTags } from '@nestjs/swagger';
import { EndpointTags } from 'src/shared/enums/controller-tags.enum';
import { Products } from '../../entities/product.entity';

@Controller('products')
@ApiTags(EndpointTags.Products)
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {}

  @Get()
  async findAll(): Promise<Products[]> {
    return await this.ProductsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Products> {
    return await this.ProductsService.findOne(id);
  }

  @Post()
  async add(@Body() ProductsDto: ProductsDto) {
    await this.ProductsService.add(ProductsDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() ProductsDto: ProductsDto) {
    await this.ProductsService.update(id, ProductsDto);
  }
}
