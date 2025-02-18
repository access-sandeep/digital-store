import { Injectable, Logger } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { catchError, firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(private readonly httpService: HttpService) {}

  async findAll(passport: string): Promise<User[]> {
    const config = {
      headers: {
        Authorization: passport,
      },
    };
    const { data } = await this.httpService.axiosRef.get<User[]>(
      'http://localhost:9000/users',
      config,
    );
    return data;
  }

  async findOne(email: string): Promise<User | null> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<User | null>(`http://localhost:9000/users/${email}`)
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }

  // async findOne(email: string): Promise<User | null> {
  //   return await this.usersRepository.findOneBy({ email });
  // }

  // async add(values: UsersDto): Promise<void> {
  //   await this.usersRepository.insert(values);
  // }

  // async update(id: string, values: UsersDto): Promise<void> {
  //   await this.usersRepository.update(id, values);
  // }

  // async remove(id: number): Promise<void> {
  //   await this.usersRepository.delete(id);
  // }

  // async attachAddress(userAddressDto: UserAddressDto): Promise<void> {
  //   await this.usersRepository.update(
  //     { id: userAddressDto.user_id },
  //     { address_id: userAddressDto.address_id },
  //   );
  // }
}
