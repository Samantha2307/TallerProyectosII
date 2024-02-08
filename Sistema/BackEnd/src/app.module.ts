import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfilModule } from './perfil/perfil.module';
import { CursoModule } from './curso/curso.module';
import { EvaluacionModule } from './evaluacion/evaluacion.module';
import { SesionModule } from './sesion/sesion.module';
import { AulavirtualModule } from './aulavirtual/aulavirtual.module';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "150.136.215.171",
      port: 3306,
      username: "ecogroup",
      password: "P3hc4*Nh*ZE#9@!PHsPgB",
      database: "db_proyectos2",
      autoLoadEntities: true,
      synchronize: false,
      migrationsRun: true
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
