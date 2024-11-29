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

  findAll(): Promise<Products[]> {
    return this.productsRepository.find();
  }

  findOne(id: string): Promise<Products | null> {
    return this.productsRepository.findOneBy({ id });
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
    const dataWithDates = {
      ...values,
      updatedate: new Date(),
    };
    await this.productsRepository.update(id, dataWithDates);
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
