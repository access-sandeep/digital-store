import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsInt, IsString } from "class-validator";
import { UserGroups } from "src/shared/enums/users/groups.enum";

export class UsersDto {
    @ApiProperty({
        description:'User group id for authorization purpose',
        enum: Object.values(UserGroups),
        example:UserGroups.AdminCustomer
    })
    @IsEnum(UserGroups)
    usergroup_id:number;

    @ApiProperty({
        description:'Address id to attach more than one address with one user',
        example:1
    })
    @IsInt()
    address_id:number;

    @ApiProperty({
        description:'Unique Email address, this is the user is as well',
        example:'example@test.com'
    })
    @IsString()
    email: string;

    @ApiProperty({
        description:'Secret password',
        example:'Af#@65F!1Ki8'
    })
    @IsString()
    password: string;

    @ApiProperty({
        description:'Full Name of the user',
        example:'Mr. Damodardas Narendra Modi'
    })
    @IsString()
    full_name: string;

    @ApiProperty({
        description:'Creation date',
        example:'2021-08-13'
    })
    @IsString()
    createddate: string;

    @ApiProperty({
        description:'Update date',
        example:'2021-08-13'
    })
    @IsString()
    updatedate: string;
}
