import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    description: 'The Firstname of the user',
    example: 'John',
  })
  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(50)
  firstname: string;

  @ApiProperty({
    description: 'The Lastname of the user',
    example: 'Doe',
  })
  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(50)
  lastname: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'johndoe@example.com',
  })
  @IsEmail()
  @IsOptional()
  @MaxLength(255)
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'jOhn_120353',
    writeOnly: true,
    format: 'password',
  })
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  @IsOptional()
  password: string;
}
