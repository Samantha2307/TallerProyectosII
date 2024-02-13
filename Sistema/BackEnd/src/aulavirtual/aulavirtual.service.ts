import { Injectable } from '@nestjs/common';
import { CreateAulavirtualDto } from './dto/create-aulavirtual.dto';
import { UpdateAulavirtualDto } from './dto/update-aulavirtual.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { aulavirtual } from './entities/aulavirtual.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AulavirtualService {

  constructor(
    @InjectRepository(aulavirtual)
    private aulavirtualRepository: Repository<aulavirtual>,
  ){}

  async listarmodulo(idcurso: number) {
    try {
        const [modulo] = await this.aulavirtualRepository.query(
          'CALL sp_listar_modulos_curso(?)', [idcurso]);
        return modulo;
    }
    catch (error) {
        throw new Error('Error al comprar curso: ' + error.message);
    }
  }

  async listarsesionmodulo(id_modulo: number, id_curso: number) {
    try {
        const [sesion] = await this.aulavirtualRepository.query(
          'Call sp_listar_sesion_modulo(?,?)', [
            id_modulo,
            id_curso,
        ]);
        return sesion;
    }
    catch (error) {
        throw new Error('Error al obtener las sesiones de un modulo: ' + error.message);
    }
  }

  async listarevaluacionmodulo(id_modulo: number) {
    try {
        const [evaluacion] = await this.aulavirtualRepository.query('Call sp_listar_evaluacion(?)', [
            id_modulo,
        ]);
        return evaluacion;
    }
    catch (error) {
        throw new Error('Error al obtener el detalle de la evaluación: ' + error.message);
    }
  }

  



  
}
