import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('perfil')
@ApiTags('Perfil')

export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}
  
  @Get(':id_usuario')
  @ApiOperation({ summary: 'Obtener perfil por ID' })
  @ApiParam({ name: 'id_usuario', description: 'ID del usuario', type: 'number' })
  async mostrarPerfil(@Param('id_usuario') id_usuario: number) {
    try {
      const perfilUsuario = await this.perfilService.getmostrarperfil(id_usuario);
      return { perfilUsuario };
    } catch (error) {
      console.error(error);
      return { error: 'Error al obtener el perfil.' };
    }
  }
}
