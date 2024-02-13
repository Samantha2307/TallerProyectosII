import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AulavirtualService } from './aulavirtual.service';
import { CreateAulavirtualDto } from './dto/create-aulavirtual.dto';
import { UpdateAulavirtualDto } from './dto/update-aulavirtual.dto';
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('aulavirtual')
@ApiTags('Aulavirtual')
export class AulavirtualController {
  constructor(private readonly aulavirtualService: AulavirtualService) {}

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
      @Param('idCurso') idcurso: number,
    ){
      return await this.aulavirtualService.listarmodulo(idcurso);
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
    
        return this.aulavirtualService.listarsesionmodulo(
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
        return this.aulavirtualService.listarevaluacionmodulo(
          id_modulo
        )
      } catch (error) {
        return {
          error: 'No se pudo obtener el detalle de la evaluacion de un modulo desde Service',
          message: error.message,
        };
      }
    }
  



}
