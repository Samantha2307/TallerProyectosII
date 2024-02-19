import {Type } from 'class-transformer';
import {
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    MaxLength,
    Min,
}
from 'class-validator';
export class EvaluacionDto{
    @IsInt({ message: 'La pagina debe ser de tipo number' })
    @Type(() => Number)
    @IsNotEmpty({ message: 'La pagina no debe estar vacio' })
    @Min(1, { message: 'La pagina no debe ser menor a 1' })
    page: number;

    @IsInt({ message: 'El tamaño de pagina debe ser de tipo number' })
    @Type(() => Number)
    @IsNotEmpty({ message: 'El tamaño de pagina no debe estar vacio' })
    @Min(1, { message: 'El tamaño de pagina no debe ser menor a 1' })
    sizePage: number;

} 