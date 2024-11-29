import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from '../../entities/address.entity';
import { AddressDto } from './models/address.dto';

@Injectable()
export class AddressService {

  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}

  findAll(): Promise<Address[]> {
    return this.addressRepository.find();
  }

  async add(values: AddressDto): Promise<void> {
    await this.addressRepository.insert(values);
  }

  async remove(id: number): Promise<void> {
    await this.addressRepository.delete(id);
  }
}
