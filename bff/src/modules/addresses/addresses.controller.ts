import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddressService } from './addresses.service';
import { AddressDto } from './models/address.dto';
import { Address } from 'src/entities/address.entity';
import { ApiTags } from '@nestjs/swagger';
import { EndpointTags } from 'src/shared/enums/controller-tags.enum';

@Controller("address")
@ApiTags(EndpointTags.Address)
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  async add(@Body() addressesDto: AddressDto) {
    await this.addressService.add(addressesDto);
  }  

  @Get()
  async findAll(): Promise<Address[]> {
    return await this.addressService.findAll();
  }  
}

