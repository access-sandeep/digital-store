import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AddressService } from './addresses.service';
import { AddressDto } from './models/address.dto';
import { Address } from 'src/entities/address.entity';
import { ApiTags } from '@nestjs/swagger';
import { EndpointTags } from 'src/shared/enums/controller-tags.enum';

@Controller('address')
@ApiTags(EndpointTags.Address)
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  async add(@Body() addressesDto: AddressDto) {
    await this.addressService.add(addressesDto);
  }

  @Put(':id')
  async put(@Param('id') id: string, @Body() addressesDto: AddressDto) {
    await this.addressService.update(id, addressesDto);
  }

  @Get()
  async findAll(): Promise<Address[]> {
    return await this.addressService.findAll();
  }
}

