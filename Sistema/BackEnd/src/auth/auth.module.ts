import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SesionModule } from 'src/sesion/sesion.module';

@Module({
  imports: [SesionModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
