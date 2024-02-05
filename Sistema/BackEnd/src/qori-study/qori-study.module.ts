import { Module } from '@nestjs/common';
import { QoriStudyService } from './qori-study.service';
import { QoriStudyController } from './qori-study.controller';

@Module({
  controllers: [QoriStudyController],
  providers: [QoriStudyService],
})
export class QoriStudyModule {}
