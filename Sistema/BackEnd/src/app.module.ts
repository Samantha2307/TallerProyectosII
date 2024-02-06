import { Module } from '@nestjs/common';
import { QoriStudyModule } from './qori-study/qori-study.module';

@Module({
  imports: [ QoriStudyModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
