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
    }
    catch(error)
    {throw new Error('Error al comprar curso: '+ error.message)}
  }



  async listarmodulo (curso: number)
  {
    try{
      const [cursos] = await this.cursoRepository.query(
        'CALL sp_listar_modulos_curso(?)',
        [curso]
      );
      return cursos;
    }
    catch(error)
    {throw new Error('Error al comprar curso: '+ error.message)}
  }
  


  async listarsesionmodulo (
    id_modulo: number,
    id_curso:number)
  {
    try{
      const [modulos] = await this.cursoRepository.query(
        'Call sp_listar_sesion_modulo(?,?)',
        [
          id_modulo,
          id_curso,
        ],
      );
      return modulos;
    }
    catch(error)
    {throw new Error('Error al obtener las sesiones de un modulo: '+ error.message)}
  }




  async listardetallecurso (
    id_curso:number)
  {
    try{
      const [cursos] = await this.cursoRepository.query(
        'Call sp_listar_detalle_curso(?)',
        [
          id_curso,
        ],
      );
      return cursos;
    }
    catch(error)
    {throw new Error('Error al obtener el detalle del curso: '+ error.message)} 
  }


  async listarforocurso(
    id_curso:number)
  {
    try{
      const [foros] = await this.cursoRepository.query(
        'Call sp_listar_foro_curso(?)',
        [
          id_curso,
        ],
      );
      return foros;
    }
    catch(error)
    {throw new Error('Error al obtener el detalle del foro: '+ error.message)}
  }



  async listarevaluacionmodulo(
    id_modulo:number)
  {
    try{
      const [evaluacion] = await this.cursoRepository.query(
        'Call sp_listar_evaluacion(?)',
        [
          id_modulo,
        ],
      );
      return evaluacion;
    }
    catch(error)
    {throw new Error('Error al obtener el detalle de la evaluación: '+ error.message)}
  }


}
