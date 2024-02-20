import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { loginDto } from './dto/login.dto';
import { Auth } from './entities/auth.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';



@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>
    ){}

    async login (logindto: loginDto)
    {
        try {
            await this.authRepository.query(
                'CALL validar_correo_usuario (?,@mensaje)', 
                [logindto.correo]);
            const result = await this.authRepository.query(
                'SELECT @mensaje AS mensaje');

            const mensaje = result[0].mensaje;

            if (mensaje === '0') {
                throw new BadRequestException('No existe el Correo');
            }
            else{

                const passwordMatch = await bcrypt.compare(logindto.clave, mensaje);
                
                if (!passwordMatch) {
                    console.log('contraseña incorrecta')
                    throw new BadRequestException('Contraseña incorrecta');
                  }
                else
                {
                    const[datos] = await this.authRepository.query(
                        'CALL validar_contraseña_usuario(?)',
                        [logindto.correo]
                    );
                    return datos;
                }
            }
        } catch (error) {
            throw new Error('Error al recibir datos de inicio Sesion: ' + error.message);
        }
    }
}
