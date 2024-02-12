import { Module } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';
import { EvaluacionController } from './evaluacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { evaluacion } from './entities/evaluacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([evaluacion])],
  controllers: [EvaluacionController],
  providers: [EvaluacionService],
})
export class EvaluacionModule {}
