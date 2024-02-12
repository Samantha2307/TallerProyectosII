import { Injectable } from '@nestjs/common';
import { CreateSesionDto } from './dto/create-sesion.dto';
import { UpdateSesionDto } from './dto/update-sesion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { sesion } from './entities/sesion.entity';
import { Repository } from 'typeorm';
import { registrarUsuarioDto } from './dto/registrar-usuario.dto';

@Injectable()
export class SesionService {
  constructor(
    @InjectRepository(sesion)
    private sesionRepository: Repository<sesion>,
  ){}
    
  async registarusuario(sesionregistrarDto: registrarUsuarioDto)
  {
    try{
    
      await this.sesionRepository.query(
        'CALL sp_regitrar_usuario(?,?,?,?,?,?,?)',
        [
          sesionregistrarDto.nombres,
          sesionregistrarDto.apellidos,
          sesionregistrarDto.correo,
          sesionregistrarDto.password,
          sesionregistrarDto.genero,
          sesionregistrarDto.fecha_nacimiento,
          sesionregistrarDto.numero, 
        ],
      );
    }
    catch (error) {
      console.log(error);
      throw new Error ('Error al obtener cursos: '+error.message);
    }
  }


}
