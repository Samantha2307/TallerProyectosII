import { Module } from '@nestjs/common';
import { SesionService } from './sesion.service';
import { SesionController } from './sesion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sesion } from './entities/sesion.entity';

@Module({
  imports : [TypeOrmModule.forFeature([sesion])],
  controllers: [SesionController],
  providers: [SesionService],
  exports: [SesionService]
})
export class SesionModule {}
