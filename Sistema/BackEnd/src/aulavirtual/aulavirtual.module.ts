import { Module } from '@nestjs/common';
import { AulavirtualService } from './aulavirtual.service';
import { AulavirtualController } from './aulavirtual.controller';

@Module({
  controllers: [AulavirtualController],
  providers: [AulavirtualService],
})
export class AulavirtualModule {}
