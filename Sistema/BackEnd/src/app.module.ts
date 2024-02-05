import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { QoriStudyModule } from './qori-study/qori-study.module';

@Module({
  imports: [
    QoriStudyModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "150.136.215.171",
      port: 3306,
      username: "ecogroup",
      password: "P3hc4*Nh*ZE#9@!PHsPgB",
      database: "db_proyectos2",
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
