import { Module } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { PerfilController } from './perfil.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { perfil } from './entities/perfil.entity';

@Module({
  imports: [TypeOrmModule.forFeature([perfil])],
  controllers: [PerfilController],
  providers: [PerfilService],
})
export class PerfilModule {}
