import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressController } from './addresses.controller';
import { Address } from '../../entities/address.entity';
import { AddressService } from './addresses.service';

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
