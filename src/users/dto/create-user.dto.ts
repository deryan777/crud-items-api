import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'senha do usuário, com no mínimo 6 caracteres',
    example: 'senhasegura123',
    minLength: 6,
  })
  @IsNotEmpty({ message: 'O campo não pode estar vazio' })
  @IsString({ message: 'o campo deve ser uma string' })
  @MinLength(6, { message: 'a senha deve ter no mínimo 6 caracteres ' })
  password: string;

  @ApiProperty({
    description: 'E-mail do usuário',
    example: 'email@email.com',
  })
  @IsNotEmpty({ message: 'O campo email nao pode estar vazio' })
  @IsString({ message: 'o campo email dever ser uma string' })
  email: string;

  @ApiProperty({
    description: 'nome do usuário',
    example: 'joaozin',
  })
  @IsNotEmpty({ message: 'O campo não pode estar vazio' })
  @IsString({ message: 'O campo name dever ser uma string' })
  name: string;
}
