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
    const currentProductValues: Products =
      await this.ProductsService.findOne(id);

    const compareProductDto: ProductsDto = {
      name: currentProductValues.name,
      sku: currentProductValues.sku,
      description: currentProductValues.description,
      short_description: currentProductValues.short_description,
    };

    if (compareProductDto === ProductsDto) {
      console.log('No updated values provided');
    } else {
      // Here there should be logic to check which keys are updated
      // Updated date should be automatically assignable and no value should be acccepted from input
      // All the logics must be moved to services
      await this.ProductsService.update(id, ProductsDto);
    }
  }
}
