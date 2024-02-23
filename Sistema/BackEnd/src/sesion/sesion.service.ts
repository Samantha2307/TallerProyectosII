import { Injectable } from '@nestjs/common';
import { CreateSesionDto } from './dto/create-sesion.dto';
import { UpdateSesionDto } from './dto/update-sesion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { sesion } from './entities/sesion.entity';
import { Repository } from 'typeorm';
import { registrarUsuarioDto } from './dto/registrar-usuario.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class SesionService {
  constructor(
    @InjectRepository(sesion)
    private sesionRepository: Repository<sesion>,
  ){}

  findOneByEmail(email: string)
  {
    return this.sesionRepository.findOneBy({email})
  }
    
  async registarusuario(sesionregistrarDto: registrarUsuarioDto)
  {
    try{

      const hashedPassword = await bcrypt.hash(sesionregistrarDto.password, 10);
    
      const [sesion] = await this.sesionRepository.query(
        'CALL sp_regitrar_usuario(?,?,?,?,?,?,?)',
        [
          sesionregistrarDto.nombres,
          sesionregistrarDto.apellidos,
          sesionregistrarDto.correo,
          hashedPassword,
          sesionregistrarDto.genero,
          sesionregistrarDto.fecha_nacimiento,
          sesionregistrarDto.numero, 
        ],
      );

      return sesion;
    }
    catch (error) {
      console.log(error);
      throw new Error ('Error al obtener cursos: '+error.message);
    }
  }


}
