import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';

@Controller('perfil')
@ApiTags('Perfil')
export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}

  @Post()
  create(@Body() createPerfilDto: CreatePerfilDto) {
    return this.perfilService.create(createPerfilDto);
  }


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

  @Get()
  findAll() {
    return this.perfilService.findAll();
  }

  @Get(':id_perfil') // Cambié el nombre del parámetro para evitar conflictos
  findOne(@Param('id_perfil') id: string) {
    return this.perfilService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePerfilDto: UpdatePerfilDto) {
    return this.perfilService.update(+id, updatePerfilDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perfilService.remove(+id);
  }
}
