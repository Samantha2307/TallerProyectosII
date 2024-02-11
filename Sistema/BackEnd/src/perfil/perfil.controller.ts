import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('perfil')
@ApiTags('Perfil')

export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}
  
  @Get('mostrarperfil/:idUsuario')
  @ApiOperation({ summary: 'Obtener perfil por ID' })
  @ApiParam({ name: 'idUsuario', description: 'ID del usuario', type: 'number' })
  async mostrarPerfil(@Param('idUsuario') id_usuario: number) {
    try {
      const perfilUsuario = await this.perfilService.getmostrarperfil(id_usuario);
      return { perfilUsuario };
    } catch (error) {
      console.error(error);
      return { error: 'Error al obtener el perfil.' };
    }
  }

  @Get('mostrardatos/:idUsuario')
  @ApiOperation({
    summary: 'Mostrar datos personales por ID de Usario',
    description: 'Esta APi permite Mostrar los datos personales de un usuario mediante el sp_datos_personales_mostrar(?);'
  })
  @ApiParam({ name: 'idUsuario', description: 'ID del usuario', type: 'number' })
  async mostrarDatosP(@Param('idUsuario') id_usuario: number) {
    try {
      const datosUsuario = await this.perfilService.getmostrardatospersonales(id_usuario);
      return { datosUsuario };
    } catch (error) {
      console.error(error);
      return { error: 'Error al obtener el perfil.' };
    }
  }

}
