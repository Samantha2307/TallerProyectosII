import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { curso } from './entities/curso.entity';
import { Repository } from 'typeorm';
import { CursoFilterNewDto } from './dto/curso-filter-nuevo.dto';

@Injectable()
export class CursoService {

  constructor(
    @InjectRepository(curso)
    private cursoRepository: Repository<curso>,
  ){}

  async listarcurso(filtrarNuevoDto: CursoFilterNewDto)
  {
    try{
      const startIndex = (filtrarNuevoDto.page - 1) * filtrarNuevoDto.sizePage;
      console.log(filtrarNuevoDto.nombre)
      console.log(filtrarNuevoDto.categoria,)
      const [cursos] = await this.cursoRepository.query(
        'CALL sp_listar_cursos_filtros(?,?)',
        [
          filtrarNuevoDto.nombre,
          filtrarNuevoDto.categoria,
        ],
      );
      
      const cursosPaginados = cursos.slice(
        startIndex,
        startIndex + filtrarNuevoDto.sizePage,
      );
      const totalCursos = cursos.length;
      return { totalCursos, cursos: cursosPaginados };

    }
    catch (error) {
      console.log(error);
      throw new Error ('Error al obtener cursos: '+error.message);
    }
  }
}
