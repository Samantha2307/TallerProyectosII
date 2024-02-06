import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { CursoFilterNewDto } from './dto/curso-filter-nuevo.dto';

@Controller('curso')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}


  @Get()
  filtrarcursos(
    @Query() filtrarNuevoDto : CursoFilterNewDto,)
    {
      try {
        return this.cursoService.listarcurso(filtrarNuevoDto);
      } catch (error) {
        return {
          error: 'No se pudo obtener la reseña del curso desde Service',
          message: error.message,
        };
      }
      
    }

  @Post()
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.cursoService.create(createCursoDto);
  }

  @Get()
  findAll() {
    return this.cursoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cursoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCursoDto: UpdateCursoDto) {
    return this.cursoService.update(+id, updateCursoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cursoService.remove(+id);
  }
}
