import { Controller, Get, Query } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoFilterNewDto } from './dto/curso-filter-nuevo.dto';
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('curso')
@ApiTags('Curso')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Get()
  @ApiHeader({
    name: 'api-key',
    description: 'Contra de API',
  })
  @ApiOperation({
    summary: 'Cursos',
    description: 'Esta API permite mostrar los cursos que contiene la plataforma',
  })
  filtrarcursos(
    @Query() filtrarNuevoDto: CursoFilterNewDto,
  ) {
    /*const filtrarNuevoDto: CursoFilterNewDto = {
      nombre: nombre !== undefined ? nombre : "",
      categoria: categoria !== undefined ? categoria : null,
      page,
      sizePage,
    };*/
   try {
      return this.cursoService.listarcurso(filtrarNuevoDto);
    } catch (error) {
      return {
        error: 'No se pudo obtener la reseña del curso desde Service',
        message: error.message,
      };
    }
  }
}


