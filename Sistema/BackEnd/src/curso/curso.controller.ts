import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CursoService } from './curso.service';
import { CursoFilterNewDto } from './dto/curso-filter-nuevo.dto';

@Controller('curso')
@ApiTags('Curso')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Get('listadocurso')
  @ApiHeader({
    name: 'api-key',
    description: 'Contra de API',
  })
  @ApiOperation({
    summary: 'Cursos',
    description: 'Esta API permite mostrar los cursos que contiene la plataforma el procedimiento que se utiliza es el siguiente sp_listar_cursos_filtros(?,?)',
  })
async filtrarcursos(
    @Query() filtrarNuevoDto: CursoFilterNewDto,
  ) {
  try {
      return this.cursoService.listarcurso(filtrarNuevoDto);
    } catch (error) {
      return {
        error: 'No se pudo obtener la reseña del curso desde Service',
        message: error.message,
      };
    }
  }


  @Get('cursocomprado/:idEstudiante')
  @ApiHeader({
    name: 'api-key',
    description: 'Contra de API',
  })
  @ApiOperation({
    summary: 'Listar Cursos Comprado por Id Estudiante',
    description: 'Esta APi permite Mostrar los cursos que un usuario a adquirido mediante el sp_listar_cursos_comprados(?,?,?)'
  })
  async filtrarcursoscomprados(
    @Param('idEstudiante') id_usuario: number,
    @Query() filtrarcursoscomprados: CursoFilterNewDto,
  )
  {
    try {

      return this.cursoService.listarcursocomprados(
        id_usuario,
        filtrarcursoscomprados
      )

    } catch (error) {
      return {
        error: 'No se pudo obtener los cursos comprados desde Service',
        message: error.message,
      };
    }
  }


  @Post('registrarcompra/:idUsuario/:idCurso')

  @ApiHeader({
    name: 'api-key',
    description: 'Contra de API',
  })
  @ApiOperation({
    summary: 'Realizar Compra Curso',
    description: 'Esta APi permite Registrar una Adquisición de un Curso a un alumno y utiliza el SP sp_insertar_compra_curso(?,?,@mensaje) '
  })

  async registrarcompra(
      @Param('idUsuario') id_usuario: number,
      @Param('idCurso') id_curso: number,
    ) {
      return await this.cursoService.comprarcurso(id_usuario, id_curso);
    }


    @Get('listarmodulo/:idCurso')
    @ApiHeader({
      name: 'api-key',
      description: 'Contra de API',
    })
    @ApiOperation({
      summary: 'Listar Cursos Comprado por Id Estudiante',
      description: 'Esta APi permite listar modulos de un curso y para eos se utiliza el sp_listar_modulos_curso(?) '
    })
  
    async listarmodulo(
      @Param('idCurso') curso: number,
    ){
      return await this.cursoService.listarmodulo(curso);
    }
  
  
  
    @Get('sesionesmodulo/:idModulo/:idCurso')
    @ApiHeader({
      name: 'api-key',
      description: 'Contra de API',
    })
    @ApiOperation({
      summary: 'Listar Sesiones de un Modulo por ID del Modulo y ID del Curso',
      description: 'Esta APi Permite Mostrar las Sesiones de un Modulos Mediante el sp_listar_sesion_modulo(?,?)'
    })
    listarsesionesmodulo(
      @Param('idModulo') id_modulo: number,
      @Param('idCurso') id_curso: number,
    )
    {
      try {
    
        return this.cursoService.listarsesionmodulo(
          id_modulo,
          id_curso
        )
    
      } catch (error) {
        return {
          error: 'No se pudo obtener las sesiones del modulo desde Service',
          message: error.message,
        };
      }
    }
  
  
  
    @Get('detallecurso/:idCurso')
    @ApiHeader({
      name: 'api-key',
      description: 'Contra de API',
    })
    @ApiOperation({
      summary: 'Listar Detalle de un Curso por ID del Curso',
      description: 'Esta APi Permite Mostrar el Detalle de un Curso Mediante el sp_listar_detalle_curso(?,)'
    })
    listardetallecurso(
      @Param('idCurso') id_curso: number,
    )
    {
      try {
    
        return this.cursoService.listardetallecurso(
          id_curso
        )
    
      } catch (error) {
        return {
          error: 'No se pudo obtener el detalle del curso desde Service',
          message: error.message,
        };
      }
    }
  
  
  
    @Get('detalleforocurso/:idCurso')
    @ApiHeader({
      name: 'api-key',
      description: 'Contra de API',
    })
    @ApiOperation({
      summary: 'Listar Detalle del Foro de un Curso por ID del Curso',
      description: 'Esta APi Permite Mostrar el Detalle del Foro de un Curso Mediante el sp_listar_foro_curso(?)'
    })
    listardetalleforocurso(
      @Param('idCurso') id_curso: number,
    )
    {
      try {
    
        return this.cursoService.listarforocurso(
          id_curso
        )
    
      } catch (error) {
        return {
          error: 'No se pudo obtener el detalle del foro de un curso desde Service',
          message: error.message,
        };
      }
    }
  
  
  
  
    @Get('detalleevaluacionmodulo/:idModulo')
    @ApiHeader({
      name: 'api-key',
      description: 'Contra de API',
    })
    @ApiOperation({
      summary: 'Listar Detalle de la Evaluacion de un Modulo por ID del Modulo',
      description: 'Esta APi Permite Mostrar el Detalle de la Evaluacion de un Modulo Mediante el sp_listar_evaluacion(?)'
    })
    listardetalleevaluacionmodulo(
      @Param('idModulo') id_modulo: number,
    )
    {
      try {
    
        return this.cursoService.listarevaluacionmodulo(
          id_modulo
        )
    
      } catch (error) {
        return {
          error: 'No se pudo obtener el detalle de la evaluacion de un modulo desde Service',
          message: error.message,
        };
      }
    }

    @Get('cursoinsribirse/:idCurso/:idEstudiante')
    @ApiHeader({
      name: 'api-key',
      description: 'Contra de API',
    })
    @ApiOperation({
      summary: 'Listar Detalle del Curso para la inscrición',
      description: 'Esta APi permite Mostrar los detalles de un cursos que un usuario a adquirido mediante el sp_listar_datos_curso_inscripcion(?,?)'
    })
    async listarcursoinscripcion(
      @Param('idCurso') id_curso: number,
      @Param('idEstudiante') id_usuario: number,
    )
    {
      try {
        return this.cursoService.listarcursoinscripcion(
          id_curso,
          id_usuario
        )
      } catch (error) {
        return {
          error: 'No se pudo obtener los cursos comprados desde Service',
          message: error.message,
        };
      }
    }
}


