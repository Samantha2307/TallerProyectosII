import { Controller, Get, Param, Query } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoFilterNewDto } from './dto/curso-filter-nuevo.dto';
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('curso')
@ApiTags('Curso')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Get('listadocurso')
  @ApiHeader({
    name: 'api-key',
    description: 'Contra de API',
  })
  @ApiOperation({
    summary: 'Cursos',
    description: 'Esta API permite mostrar los cursos que contiene la plataforma el procedimiento que se utiliza es el siguiente sp_listar_cursos_filtros(?,?)',
  })
  filtrarcursos(
    @Query() filtrarNuevoDto: CursoFilterNewDto,
  ) {
   try {
      return this.cursoService.listarcurso(filtrarNuevoDto);
    } catch (error) {
      return {
        error: 'No se pudo obtener la reseña del curso desde Service',
        message: error.message,
      };
    }
  }


  @Get('cursocomprado/:idEstudiante')
  @ApiHeader({
    name: 'api-key',
    description: 'Contra de API',
  })
  @ApiOperation({
    summary: 'Listar Cursos Comprado por Id Estudiante',
    description: 'Esta APi permite Mostrar los cursos que un usuario a adquirido mediante el sp_listar_cursos_comprados(?,?,?)'
  })
  filtrarcursoscomprados(
    @Param('idEstudiante') id_usuario: number,
    @Query() filtrarcursoscomprados: CursoFilterNewDto,
  )
  {
    try {

      return this.cursoService.listarcursocomprados(
        id_usuario,
        filtrarcursoscomprados
      )
 
    } catch (error) {
      return {
        error: 'No se pudo obtener los cursos comprados desde Service',
        message: error.message,
      };
    }
  }

}


