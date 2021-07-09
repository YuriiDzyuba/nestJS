import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({example: 'my@email.ua', description: 'post box'})
  readonly email: string;
  @ApiProperty({example: 'qwerty123', description: 'user password'})
  readonly password: string;
}