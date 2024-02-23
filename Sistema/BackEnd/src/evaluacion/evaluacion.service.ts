import { Injectable } from '@nestjs/common';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { evaluacion } from './entities/evaluacion.entity';
import { Repository } from 'typeorm';
import { EvaluacionDto } from './dto/evaluaciondto.dto';

@Injectable()
export class EvaluacionService {
  constructor(
    @InjectRepository(evaluacion)
    private evaluacionRepository: Repository<evaluacion>,
  ){}
  async listarpreguntasevaluacion(id_evaluacion: number)
  {
    try{
      const [evaluaciones] = await this.evaluacionRepository.query(
        'CALL sp_listar_preguntas_evaluacion(?)',
        [
          id_evaluacion
        ],
      );
      return evaluaciones
    }
    catch (error) {
      console.log(error);
      throw new Error ('Error al obtener las preguntas de la evaluacion: '+error.message);
    }
  }

  async listarevalacuion(id_modulo: number)
  {
    try{
      const [evaluaciones] = await this.evaluacionRepository.query(
        'CALL sp_listar_evaluacion(?)',
        [
          id_modulo
        ],
      );
      return evaluaciones
    }
    catch (error) {
      console.log(error);
      throw new Error ('Error al obtener las evaluaciones del modulo : '+error.message);
    }
  }

  async listarevalacuiondetalle(
    id_estudiante: number,
    id_evaluacion: number)
  {
    try{
      const [evaluaciones] = await this.evaluacionRepository.query(
        'CALL sp_listar_evaluacion_detalles(?,?)',
        [
          id_estudiante,
          id_evaluacion
        ],
      );
      return evaluaciones
    }
    catch (error) {
      console.log(error);
      throw new Error ('Error al obtener las evaluaciones del modulo : '+error.message);
    }
  }

  async listarpreguntasevaluacionestudiante(

    id_evaluacion: number,
    id_estudiante: number,
    evaluaciondto: EvaluacionDto,
  )
  {
    try{
      const startIndex = (evaluaciondto.page - 1) * evaluaciondto.sizePage;
      const [evaluacion] = await this.evaluacionRepository.query(
        'CALL sp_listar_preguntas_evaluacion_estudiante(?,?)',
        [
          id_evaluacion,
          id_estudiante,
        ],
      );
      
      const evaluacionPaginados = evaluacion.slice(
        startIndex,
        startIndex + evaluaciondto.sizePage,
      );
      const totalevaluacion = evaluacion.length;
      return { totalevaluacion, cursos: evaluacionPaginados };

    }
    catch (error) {
      console.log(error);
      throw new Error ('Error al obtener cursos: '+error.message);
    }


  }

  async alternativas(
    id_evaluacion: number)
  {
    try{
      const [alternativas] = await this.evaluacionRepository.query(
        'CALL sp_listar_alternativas_evaluacion(?)',
        [
          id_evaluacion
        ],
      );
      return alternativas
    }
    catch (error) {
      console.log(error);
      throw new Error ('Error al obtener las alternativas : '+error.message);
    }
  }

  async registrar_respuesta(
    id_detalle_evaluacion: number,
    id_evaluacion: number,
    id_pregunta: number,
    id_alternativa: number,
    )
  {
    try{
      await this.evaluacionRepository.query(
        'CALL sp_registrar_respuesta_estudiante(?,?,?,?)',
        [
          id_detalle_evaluacion,
          id_evaluacion,
          id_pregunta,
          id_alternativa,
        ],
      );
    }
    catch (error) {
      console.log(error);
      throw new Error ('Error al obtener las alternativas : '+error.message);
    }
  }

  async registrar_evaluacion(
    id_evaluacion: number,
    id_estudiante: number,

    )
  {
    try{
      await this.evaluacionRepository.query(
        'CALL sp_registrar_evaluacion(?,?)',
        [
          id_evaluacion,
          id_estudiante,
        ],
      );
    }
    catch (error) {
      console.log(error);
      throw new Error ('Error al obtener las alternativas : '+error.message);
    }
  }


}
