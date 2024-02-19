import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { ApiTags, ApiOperation, ApiParam, ApiHeader } from '@nestjs/swagger';

@Controller('perfil')
@ApiTags('Perfil')

export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}
  
  @Get('mostrarPerfil/:id_usuario')
  @ApiHeader({
    name: 'api-key',
    description: 'Contra de API',
  })
  @ApiOperation({
    summary: 'Mostrar perfil por ID de Usario',
    description: 'Esta APi permite Mostrar el perfil de un usuario mediante el sp_mostrar_perfil(?);'
  })
  async mostrarPerfil(@Param('id_usuario') id_usuario: number) {
    try {
      const perfilUsuario = await this.perfilService.getmostrarperfil(id_usuario);
      return { perfilUsuario };
    } catch (error) {
      console.error(error);
      return { error: 'Error al obtener el perfil.' };
    }
  }

  @Get('mostrardatos/:idUsuario')
  @ApiHeader({
    name: 'api-key',
    description: 'Contra de API',
  })
  @ApiOperation({
    summary: 'Mostrar datos personales por ID de Usario',
    description: 'Esta APi permite Mostrar los datos personales de un usuario mediante el sp_datos_personales_mostrar(?);'
  })

  async mostrarDatosP(@Param('idUsuario') id_usuario: number) {
    try {
      const datosUsuario = await this.perfilService.getmostrardatospersonales(id_usuario);
      return { datosUsuario };
    } catch (error) {
      console.error(error);
      return { error: 'Error al obtener el perfil.' };
    }
  }

  @Post('aPassword/:passwordNuevo/:idUsuario')
  @ApiHeader({
    name: 'api-key',
    description: 'Contra de API',
  })
  @ApiOperation({
    summary: 'Actualizar contraseña por ContraseñaNueva y ID de Usario',
    description: 'Esta APi permite Actualizar la contraseña de un usuario mediante el sp_actualizar_contraseña(?,?);'
  })
  
  async aPassword(
    @Param('passwordNuevo') password: string,
    @Param('idUsuario') id_usuario: number,) {
    try {
      const actualizarC = await this.perfilService.getactualizarcontraseña(password,id_usuario);
      return { actualizarC };
    } catch (error) {
      console.error(error);
      return { error: 'Error al actualizar contraseña.' };
    }
  }

  @Post('aDatosPersonales/:numero/:pais/:idUsuario')
  @ApiHeader({
    name: 'api-key',
    description: 'Contra de API',
  })
  @ApiOperation({
    summary: 'Actualizar Datos Personales por Numero, Pais y ID de Usario',
    description: 'Esta APi permite Actualizar los Datos Personales de un usuario mediante el sp_actualizar_datos_personales(?,?,?);'
  })
  
  async aDatosPersonales(
    @Param('numero') numero: number,
    @Param('pais') pais: string,
    @Param('idUsuario') id_usuario: number) {
    try {
      const actualizarDP = await this.perfilService.getactualizardatospersonales(numero,pais,id_usuario);
      return { actualizarDP };
    } catch (error) {
      console.error(error);
      return { error: 'Error al actualizar datos personales.' };
    }
  }

  @Post('aImagen/:imagenEnlace/:idUsuario')
  @ApiHeader({
    name: 'api-key',
    description: 'Contra de API',
  })
  @ApiOperation({
    summary: 'Actualizar Imagen de Perfil por Enlace de Imagen y ID de Usario',
    description: 'Esta APi permite Actualizar la imagen de perfil de un usuario mediante el sp_actualizar_imagen(?,?);'
  })
  
  async aImagen(
    @Param('imagenEnlace') imagenEnlace: string,
    @Param('idUsuario') id_usuario: number) {
    try {
      const actualizarI = await this.perfilService.getactualizarimagen(imagenEnlace,id_usuario);
      return { actualizarI };
    } catch (error) {
      console.error(error);
      return { error: 'Error al actualizar imagen.' };
    }
  }






}
