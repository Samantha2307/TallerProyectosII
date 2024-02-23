import {Type } from 'class-transformer';
import {
  IsDateString,
    IsIn,
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Max,
    MaxLength,
    Min,
}
from 'class-validator';

export class registrarUsuarioDto {

  @IsNotEmpty()
  @IsString({ message: 'La variable input ingresada debe ser de tipo string' })
  @MaxLength(200, { message: 'El input maximo es de 200 caracteres para los nombres' })
  nombres?: string;

  @IsString({ message: 'La variable input ingresada debe ser de tipo string' })
  @MaxLength(200, { message: 'El input maximo es de 200 caracteres para los apellidos' })
  apellidos?: string;


  @IsNotEmpty()
  @IsString({ message: 'La variable input ingresada debe ser de tipo string' })
  @MaxLength(200, { message: 'El input maximo es de 200 caracteres para el correo' })
  correo?: string;

  
  @IsNotEmpty()
  @IsOptional()
  @IsString({ message: 'La variable input ingresada debe ser de tipo string' })
  @MaxLength(50, { message: 'El input maximo es de 50 caracteres para la contraseña' })
  password?: string ;


  @Type(() => Number)
  @IsInt({ message: 'La variable ingresada debe ser de tipo number' })
  @IsIn([0, 1], { message: 'El valor permitido es 0 o 1' })
  genero?: number;

  @IsNotEmpty()
  @IsDateString(
    {},
    {
      message:
        'La variable fecha_nacimiento ingresada debe ser de tipo string y Date XXXX-XX-XX',
    },
  )
  fecha_nacimiento: string;

  @IsNotEmpty()
  @IsOptional()
  @IsString({ message: 'La variable input ingresada debe ser de tipo string' })
  @MaxLength(12, { message: 'El input del maximo es de 12 caracteres para el numero de celular' })
  numero?: string ;
}

