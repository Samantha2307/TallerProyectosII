import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
import { EvaluacionDto } from './dto/evaluaciondto.dto';


@Controller('evaluacion')
@ApiTags('Evaluacion')
export class EvaluacionController {
  constructor(private readonly evaluacionService: EvaluacionService) {}

  @Get('listarPreguntas/:idevaluacion')
    @ApiHeader({
      name: 'api-key',
      description: 'Contra de API',
    })
    @ApiOperation({
      summary: 'Listar preguntas evaluacion',
      description: 'Esta APi permite listar preguntas de una evaluacion en base al sp_listar_preguntas_evaluacion(?)'
    })
    async listarcursoinscripcion(
      @Param('idevaluacion') id_evaluacion: number, 
    )
    {
      try {
        return this.evaluacionService.listarpreguntasevaluacion(
          id_evaluacion
        )
      } catch (error) {
        return {
          error: 'No se pudo obtener la lista de preguntas',
          message: error.message,
        };
      }
    }

    @Get('listarEvaluacion/:idmodulo')
    @ApiHeader({
      name: 'api-key',
      description: 'Contra de API',
    })
    @ApiOperation({
      summary: 'Listar evaluacion',
      description: 'Esta APi permite listar evaluaciones de un módulo con el sp_listar_evaluacion(?)'
    })
    async listarevalacuion(
      @Param('idmodulo') id_modulo: number, 
    )
    {
      try {
        return this.evaluacionService.listarevalacuion(
          id_modulo
        )
      } catch (error) {
        return {
          error: 'No se pudo obtener la lista de preguntas',
          message: error.message,
        };
      }
    }

    @Get('listarEvaluaciondetalle/:idestudiante/:idevaluacion')
    @ApiHeader({
      name: 'api-key',
      description: 'Contra de API',
    })
    @ApiOperation({
      summary: 'Listar detaller evaluacion',
      description: 'Esta APi permite listar el detalle de las evaluaciones de un estudiante con el sp_listar_evaluacion_detalles(?)(?)'
    })
    async listarevalacuiondetalle(
      @Param('idestudiante') id_estudiante: number, 
      @Param('idevaluacion') id_evaluacion: number, 
    )
    {
      try {
        return this.evaluacionService.listarevalacuiondetalle(
          id_estudiante,
          id_evaluacion
        )
      } catch (error) {
        return {
          error: 'No se pudo obtener la lista de preguntas',
          message: error.message,
        };
      }
    }

  @Get('listarpreguntaevaluacionestudiante/:idEvaluacion/:idEstudiante')
  @ApiHeader({
    name: 'api-key',
    description: 'Contra de API',
  })
  @ApiOperation({
    summary: 'listar pregunta evaluacion estudiantes',
    description: 'Esta API permite permite listar las preguntas de los estudiantes con el  sp_listar_preguntas_evaluacion_estudiante(?,?)',
  })
 async filtrarcursos(
    @Param('idEvaluacion')id_evaluacion: number,
    @Param('idEstudiante')id_estudiante: number,
    @Query() evaluaciondto: EvaluacionDto,
  ) {
   try {
      return this.evaluacionService.listarpreguntasevaluacionestudiante(
        id_evaluacion,
        id_estudiante,
        evaluaciondto,);
    } catch (error) {
      return {
        error: 'No se pudo obtener la reseña del curso desde Service',
        message: error.message,
      };
    }
  }

  @Get('listarAlternativas/:idevaluacion')
  @ApiHeader({
    name: 'api-key',
    description: 'Contra de API',
  })
  @ApiOperation({
    summary: 'Listar alternativas',
    description: 'Esta APi permite listar alternativas sp_listar_alternativas_evaluacion(?)'
  })
  async listaralternativas(
    @Param('idevaluacion') id_evaluacion: number, 
  )
  {
    try {
      return this.evaluacionService.alternativas(
        id_evaluacion
      )
    } catch (error) {
      return {
        error: 'No se pudo obtener la lista de alternativas',
        message: error.message,
      };
    }
  }

  
}
