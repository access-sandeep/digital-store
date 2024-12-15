import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'Unique Email address, this is the user is as well',
    example: 'example@test.com',
  })
  @IsString()
  email: string;

  @ApiProperty({
    description: 'Secret password',
    example: 'Af#@65F!1Ki8',
  })
  @IsString()
  password: string;
}
