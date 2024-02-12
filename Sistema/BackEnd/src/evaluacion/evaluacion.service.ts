import { Injectable } from '@nestjs/common';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { evaluacion } from './entities/evaluacion.entity';
import { Repository } from 'typeorm';

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
}
