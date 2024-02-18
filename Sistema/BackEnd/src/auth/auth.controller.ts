import { Body, Controller, Get, Post} from '@nestjs/common';
import { loginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { ApiHeader, ApiOperation } from '@nestjs/swagger';

@Controller('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('Login')
  @ApiHeader({
    name: 'api-key',
    description: 'Contra de API',
  })
  @ApiOperation({
    summary: 'Login',
    description: 'Esta API inicia sesión con CALL validar_correo_usuario (?,@mensaje)',
  })
 
  async login(@Body() logindto: loginDto) {
    try {
        return await this.authService.login(logindto);
    } catch (error) {
      
        return {error: 'Error al iniciar sesión' };
    }
  }
}
