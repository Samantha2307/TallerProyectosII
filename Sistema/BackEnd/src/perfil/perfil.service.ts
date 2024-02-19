import { Injectable } from '@nestjs/common';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { perfil } from './entities/perfil.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

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

  async getmostrardatospersonales(id_usuario:number)
  {
    try{
      const [datosPersonales] = await this.perfilRepository.query(
        'CALL sp_datos_personales_mostrar(?);',
        [id_usuario]
      );
      return datosPersonales;
    }
    catch (error)
    {
      console.log(error);
      throw new Error('Error al obtener Perfil: '+error.message);
    }
  }

  async getactualizarcontraseña(password:string, id_usuario:number)
  {
    try{

        const hashedPassword = await bcrypt.hash(password, 10);
        const [actualizarPassword] = await this.perfilRepository.query(
        'CALL sp_actualizar_contraseña(?,?);',
        [hashedPassword, id_usuario]
      );
      return actualizarPassword;
    }
    catch (error)
    {
      console.log(error);
      throw new Error('Error al obtener Perfil: '+error.message);
    }
  }


  async getactualizardatospersonales(numero:number, pais:string, id_usuario:number)
  {
    try{
        await this.perfilRepository.query(
        'CALL sp_actualizar_datos_personales(?,?,?);',
        [numero, pais, id_usuario]
      );
      
    }
    catch (error)
    {
      console.log(error);
      throw new Error('Error al obtener Perfil: '+error.message);
    }
  }

  async getactualizarimagen(imagen:string, id_usuario:number)
  {
    try{
        await this.perfilRepository.query(
        'CALL sp_actualizar_imagen(?,?);',
        [imagen, id_usuario]
      );
      
    }
    catch (error)
    {
      console.log(error);
      throw new Error('Error al obtener Perfil: '+error.message);
    }
  }






}
