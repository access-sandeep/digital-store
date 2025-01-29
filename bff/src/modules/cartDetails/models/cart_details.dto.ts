import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CartDetailsDto {
  @ApiProperty({
    description: 'id of the product',
    example: 'e0c9c1f9-b198-4f25-9e35-8a3d0f02f2c5',
  })
  @IsString()
  product_id: string;

  @ApiProperty({
    description: 'user_id of the logged-in user',
    example: 76,
  })
  @IsNumber()
  user_id: number;
}
