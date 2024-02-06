import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { curso } from './entities/curso.entity';
import { Repository } from 'typeorm';
import { CursoFilterNewDto } from './dto/curso-filter-nuevo.dto';

@Injectable()
export class CursoService {
  filtrarCursos(filtrarNuevoDto: CursoFilterNewDto) {
    throw new Error('Method not implemented.');
  }

  constructor(
    @InjectRepository(curso)
    private cursoRepository: Repository<curso>,
  ){}

  async listarcurso(cursoFilterNewDto: CursoFilterNewDto)
  {
    try{
      const startIndex = (cursoFilterNewDto.page - 1) * cursoFilterNewDto.sizePage;
      const [cursos] = await this.cursoRepository.query(
        'CALL sp_listar_cursos_filtros`(?,?)',
        [
          cursoFilterNewDto.nombre,
          cursoFilterNewDto.categoria,
        ],
      );
      
      const cursosPaginados = cursos.slice(
        startIndex,
        startIndex + cursoFilterNewDto.sizePage,
      );
      const totalCursos = cursos.length;
      return { totalCursos, cursos: cursosPaginados };

    }
    catch (error) {
      console.log(error);
      throw new Error ('Error al obtener cursos: '+error.message);
    }
  }


  create(createCursoDto: CreateCursoDto) {
    return 'This action adds a new curso';
  }

  findAll() {
    return `This action returns all curso`;
  }

  findOne(id: number) {
    return `This action returns a #${id} curso`;
  }

  update(id: number, updateCursoDto: UpdateCursoDto) {
    return `This action updates a #${id} curso`;
  }

  remove(id: number) {
    return `This action removes a #${id} curso`;
  }
}
