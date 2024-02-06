import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AulavirtualService } from './aulavirtual.service';
import { CreateAulavirtualDto } from './dto/create-aulavirtual.dto';
import { UpdateAulavirtualDto } from './dto/update-aulavirtual.dto';

@Controller('aulavirtual')
export class AulavirtualController {
  constructor(private readonly aulavirtualService: AulavirtualService) {}

  @Post()
  create(@Body() createAulavirtualDto: CreateAulavirtualDto) {
    return this.aulavirtualService.create(createAulavirtualDto);
  }

  @Get()
  findAll() {
    return this.aulavirtualService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aulavirtualService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAulavirtualDto: UpdateAulavirtualDto) {
    return this.aulavirtualService.update(+id, updateAulavirtualDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aulavirtualService.remove(+id);
  }
}
