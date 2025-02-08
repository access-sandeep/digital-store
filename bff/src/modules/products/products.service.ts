import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsDto } from './models/products.dto';
import { Products } from '../../entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}

  async findAll(): Promise<Products[]> {
    return await this.productsRepository.find();
  }

  async findOne(id: string): Promise<Products | null> {
    return await this.productsRepository.findOneBy({ id });
  }

  async add(values: ProductsDto): Promise<void> {
    const dataWithDates = {
      ...values,
      createddate: new Date(),
      updatedate: new Date(),
    };
    await this.productsRepository.insert(dataWithDates);
  }

  async update(id: string, values: ProductsDto): Promise<void> {
    const currentProductValues: Products = await this.findOne(id);

    const compareProductDto: ProductsDto = {
      name: currentProductValues.name,
      sku: currentProductValues.sku,
      description: currentProductValues.description,
      short_description: currentProductValues.short_description,
      stock_left: currentProductValues.stock_left,
      price: currentProductValues.price,
      discount: currentProductValues.discount,
      max_order_units: currentProductValues.max_order_units,
    };

    if (compareProductDto === values) {
      console.log('No updated values provided');
    } else {
      const dataWithDates = {
        ...values,
        updatedate: new Date(),
      };
      await this.productsRepository.update(id, dataWithDates);
    }
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
