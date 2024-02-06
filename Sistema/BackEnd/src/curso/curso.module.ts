import { Module } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { curso } from './entities/curso.entity'


@Module({
  imports : [TypeOrmModule.forFeature([curso])],
  controllers: [CursoController],
  providers: [CursoService],
})
export class CursoModule {}
