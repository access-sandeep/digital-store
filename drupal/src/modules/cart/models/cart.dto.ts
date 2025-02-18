import { ApiProperty } from '@nestjs/swagger';
import { CartTypes } from '../../../shared/enums/cart_type.enum';
import { CartExpiry } from '../../../shared/enums/cart_expiry.enum';
import { CartStatus } from '../../../shared/enums/cart_status.enum';

export class CartDto {
  @ApiProperty({
    description: 'user_id of the logged-in user',
    example: 76,
  })
  user_id: number;

  @ApiProperty({
    description: 'Type of the cart, is it buy now or saved',
    example: Object.values(CartTypes),
    type: 'string',
    required: false,
  })
  cart_type?: CartTypes;

  @ApiProperty({
    description: 'Quantity of expiry, unit can be Month, day, week etc',
    example: 0,
  })
  expiry_number?: number;

  @ApiProperty({
    description: 'Cart expiry unit, is it days, weeks, months or years',
    example: Object.values(CartExpiry),
    type: 'string',
    required: false,
  })
  expiry_unit?: CartExpiry;

  @ApiProperty({
    description: 'Is the cart active or expired',
    example: Object.values(CartStatus),
    type: 'string',
    required: false,
  })
  active?: CartStatus;
}
