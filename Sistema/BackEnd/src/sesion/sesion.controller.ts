import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SesionService } from './sesion.service';
import { CreateSesionDto } from './dto/create-sesion.dto';
import { UpdateSesionDto } from './dto/update-sesion.dto';
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
import { registrarUsuarioDto } from './dto/registrar-usuario.dto';

@Controller('sesion')
@ApiTags('Sesion')
export class SesionController {
  constructor(private readonly sesionService: SesionService) {}

  @Post('registrarUsuario')
  @ApiHeader({
    name: 'api-key',
    description: 'Contra de API',
  })
  @ApiOperation({
    summary: 'Registrar Usuario',
    description: ' Esta API permite registrar un usuario a la plataforma , utiliza el CALL sp_regitrar_usuario(?,?,?,?,?,?,?)',
  })
 async registarusuario(
    @Query() sesionregistrarDto: registrarUsuarioDto,
  ) {
   try {
      return this.sesionService.registarusuario(sesionregistrarDto);
    } catch (error) {
      return {
        error: 'No se pudo obtener la reseña del curso desde Service',
        message: error.message,
      };
    }
  }

}
