import { Module } from '@nestjs/common';
import { QoriStudyModule } from './qori-study/qori-study.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfilModule } from './perfil/perfil.module';
import { CursoModule } from './curso/curso.module';
import { EvaluacionModule } from './evaluacion/evaluacion.module';
import { SesionModule } from './sesion/sesion.module';
import { AulavirtualModule } from './aulavirtual/aulavirtual.module';

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
    PerfilModule,
    CursoModule,
    EvaluacionModule,
    SesionModule,
    AulavirtualModule,
   ],
  controllers: [],
  providers: [],
})
export class AppModule {}
