import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { UsersDto } from './models/users.dto';
import { UserAddressDto } from './models/user_address.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email });
  }

  async add(values: UsersDto): Promise<void> {
    await this.usersRepository.insert(values);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async attachAddress(userAddressDto: UserAddressDto): Promise<void> {
    await this.usersRepository.update(
      { id: userAddressDto.user_id },
      { address_id: userAddressDto.address_id },
    );
  }
}
