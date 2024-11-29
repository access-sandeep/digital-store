import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class UserAddressDto {
    @ApiProperty({
        description:'User id',
        example:23
    })
    @IsInt()
    user_id:number;

    @ApiProperty({
        description:'Address id',
        example:1
    })
    @IsInt()
    address_id:number;
}
