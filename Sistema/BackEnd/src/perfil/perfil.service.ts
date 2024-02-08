import { Injectable } from '@nestjs/common';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { perfil } from './entities/perfil.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PerfilService {

  constructor(
    @InjectRepository(perfil)
    private perfilRepository: Repository<perfil>
  ){}


  async getmostrarperfil(id_usuario:number)
  {
    try{
      const [perfilUsuario] = await this.perfilRepository.query(
        'CALL sp_mostrar_perfil(?);',
        [id_usuario]
      );
      return perfilUsuario;
    }
    catch (error)
    {
      console.log(error);
      throw new Error('Error al obtener Perfil: '+error.message);
    }
  }
}
