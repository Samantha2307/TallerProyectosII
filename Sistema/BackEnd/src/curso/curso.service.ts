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

  async listarcursocomprados (
    id_usuario: number,
    filtrarcursoscomprados: CursoFilterNewDto)
  {
    try{
      const startIndex = (filtrarcursoscomprados.page - 1) * filtrarcursoscomprados.sizePage;
      const [cursos] = await this.cursoRepository.query(
        'Call sp_listar_cursos_comprados(?,?,?)',
        [
          id_usuario,
          filtrarcursoscomprados.nombre,
          filtrarcursoscomprados.categoria,
        ],
      );
      const cursosPaginados = cursos.slice(
        startIndex,
        startIndex + filtrarcursoscomprados.sizePage,
      );
      const totalCursos = cursos.length;
      return { totalCursos,cursos : cursosPaginados };
    }
    catch(error)
    {throw new Error('Error al obtener cursos comprados: '+ error.message)}
    
  }

  async comprarcurso (id_usuario:number, id_curso: number){
    try
    {
      await this.cursoRepository.query(
        'CALL sp_insertar_compra_curso(?,?,@mensaje)',
        [id_usuario,id_curso]
      );
      const [result] = await this.cursoRepository.query(
        'SELECT @mensaje AS mensaje',
      );

      const mensajeResultado = result.mensaje;
      console.log('Mensaje de compra:', mensajeResultado);
      return result;
    }
    catch(error)
    {throw new Error('Error al comprar curso: '+ error.message)}
  }

  async listarcursoinscripcion (
    id_curso: number,
    id_usuario: number)
  {
    try{
      const [cursos] = await this.cursoRepository.query(
        'Call sp_listar_datos_curso_inscripcion(?,?)',
        [
          id_curso,
          id_usuario,
        ],
      );
      return cursos;
    }
    catch(error)
    {throw new Error('Error al obtener cursos comprados: '+ error.message)}
    
  }


  
  
}
