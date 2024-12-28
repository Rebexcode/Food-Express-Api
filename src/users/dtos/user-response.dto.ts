import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({
    description: 'The Firstname of the user',
    example: 'John',
  })
  firstname: string;

  @ApiProperty({
    description: 'The Lastname of the user',
    example: 'Doe',
  })
  lastname: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'johndoe@example.com',
  })
  email: string;
}
