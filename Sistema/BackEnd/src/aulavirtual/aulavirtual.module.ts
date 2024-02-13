import { Module } from '@nestjs/common';
import { AulavirtualService } from './aulavirtual.service';
import { AulavirtualController } from './aulavirtual.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { aulavirtual } from './entities/aulavirtual.entity';

@Module({
  imports: [TypeOrmModule.forFeature([aulavirtual])],
  controllers: [AulavirtualController],
  providers: [AulavirtualService],
})
export class AulavirtualModule {}
