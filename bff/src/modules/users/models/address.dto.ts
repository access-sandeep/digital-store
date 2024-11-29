import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class AddressDto {
    @ApiProperty({
        description:'Address Line 1',
        example:'Block J, House No. 44'
    })
    @IsString()
    address_line1:string;

    @ApiProperty({
        description:'Address Line 2',
        example:'Thalambur Main Road'
    })
    @IsString()
    address_line2:string;

    @ApiProperty({
        description:'Country',
        example:'India'
    })
    @IsString()
    country:string;

    @ApiProperty({
        description:'State',
        example:'Tamil Nadu'
    })
    @IsString()
    state:string;

    @ApiProperty({
        description:'City',
        example:'Chennai'
    })
    @IsString()
    city:string;

    @ApiProperty({
        description:'Postal code zip',
        example:600130
    })
    @IsInt()
    postalcode:number;
}
